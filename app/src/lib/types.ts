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

export interface PointI {
  type: "Feature";
  properties: {
    id: number;
    name: string;
    category: string;
    city: string;
    state: string;
    url: string;
  };
  geometry: {
    coordinates: [number, number];
    type: "Point";
  };
  id: number;
}

export interface GeoJSON<T = PointI> {
  type: "FeatureCollection";
  features: Array<T>;
}
