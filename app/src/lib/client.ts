import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { CompanyRenderer } from "@/lib/arcgis/renderers";
import { CompanyPopupTemplate } from "@/lib/arcgis/templates";
import { CompanyLabels } from "@/lib/arcgis/labels";
import type { CompanyPin, PointI, GeoJSON } from "@/lib/types";

export async function GetCompanies(): Promise<
  [GeoJSONLayer, GeoJSON<PointI>, CompanyPin[]]
> {
  const res = await fetch("/geo/companies");
  if (!res.ok) {
    throw new Error(`Failed to fetch companies: ${res.status}`);
  }
  const companies: CompanyPin[] = await res.json();

  // Build GeoJSON FeatureCollection from companies with valid coordinates
  const features: PointI[] = companies
    .filter((c) => c.lat != null && c.lon != null)
    .map((c) => ({
      type: "Feature" as const,
      id: c.id,
      geometry: {
        type: "Point" as const,
        coordinates: [c.lon!, c.lat!] as [number, number],
      },
      properties: {
        id: c.id,
        name: c.name,
        category: c.category,
        city: c.city,
        state: c.state,
        url: c.url,
      },
    }));

  const geojson: GeoJSON<PointI> = { type: "FeatureCollection", features };

  // Build ArcGIS GeoJSONLayer from blob URL
  const blob = new Blob([JSON.stringify(geojson)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  const layer = new GeoJSONLayer({
    url,
    renderer: CompanyRenderer,
    popupTemplate: CompanyPopupTemplate,
    labelingInfo: [CompanyLabels],
    minScale: 5000000, // Hide when zoomed out beyond 1:5,000,000 scale
    maxScale: 0,
  });

  return [layer, geojson, companies];
}
