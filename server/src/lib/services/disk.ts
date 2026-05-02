import { readFile, readdir } from "fs/promises";
import path from "path";

export interface CompanyPin {
  id: number;
  name: string;
  category: string;
  city: string;
  state: string;
  url: string;
  lat: number | null;
  lon: number | null;
}

interface CompanyDetail {
  id: number;
  geo?: { lat: string; lon: string };
  [key: string]: unknown;
}

export class DataService {
  private readonly dataPath: string;
  private companyCache: CompanyPin[] | null = null;

  constructor() {
    this.dataPath = path.resolve(__dirname, "../data");
  }

  async read<T = unknown>(filename: string): Promise<T> {
    const file = await readFile(path.join(this.dataPath, filename), "utf-8");
    return JSON.parse(file) as T;
  }

  async companies(): Promise<CompanyPin[]> {
    if (this.companyCache) return this.companyCache;

    // Load company rows: [id, name, category, city, state, url]
    const rows = await this.read<
      [number, string, string, string, string, string][]
    >("mfg-companies-lite.json");

    // Load detail chunks for geo coordinates
    const detailsDir = path.join(this.dataPath, "mfg-company-details");
    const chunkFiles = (await readdir(detailsDir))
      .filter((name) => /^part-\d+\.json$/i.test(name))
      .sort();

    const geoMap = new Map<number, { lat: number; lon: number }>();
    for (const chunk of chunkFiles) {
      const records = await this.read<CompanyDetail[]>(
        `mfg-company-details/${chunk}`,
      );
      for (const r of records) {
        if (r.id && r.geo?.lat && r.geo?.lon) {
          const lat = parseFloat(r.geo.lat);
          const lon = parseFloat(r.geo.lon);
          if (!isNaN(lat) && !isNaN(lon)) {
            geoMap.set(r.id, { lat, lon });
          }
        }
      }
    }

    // Join rows with geo data
    this.companyCache = rows.map((row) => {
      const geo = geoMap.get(row[0]);
      return {
        id: row[0],
        name: row[1] || "",
        category: row[2] || "Manufacturing",
        city: row[3] || "",
        state: row[4] || "",
        url: row[5] || "",
        lat: geo?.lat ?? null,
        lon: geo?.lon ?? null,
      };
    });

    return this.companyCache;
  }
}

export const DataStore = new DataService();
