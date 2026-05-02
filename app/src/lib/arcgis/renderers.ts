import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";

const outline = new SimpleLineSymbol({ color: [50, 50, 50, 0.6], width: 0.5 });

function marker(color: number[]): SimpleMarkerSymbol {
  return new SimpleMarkerSymbol({
    style: "circle",
    color,
    size: 5,
    outline,
  });
}

export const CompanyRenderer = new UniqueValueRenderer({
  field: "category",
  defaultSymbol: marker([120, 120, 120, 0.7]),
  defaultLabel: "Other",
  uniqueValueInfos: [
    { value: "Manufacturing", symbol: marker([30, 100, 200, 0.7]), label: "Manufacturing" },
    { value: "CNC Machining", symbol: marker([0, 150, 80, 0.7]), label: "CNC Machining" },
    { value: "Electronics", symbol: marker([180, 60, 200, 0.7]), label: "Electronics" },
    { value: "Metal Manufacturing", symbol: marker([200, 120, 30, 0.7]), label: "Metal Manufacturing" },
    { value: "Foundry / Casting", symbol: marker([160, 80, 20, 0.7]), label: "Foundry / Casting" },
    { value: "Injection Molding", symbol: marker([0, 180, 180, 0.7]), label: "Injection Molding" },
    { value: "Semiconductor Fab", symbol: marker([220, 40, 40, 0.7]), label: "Semiconductor Fab" },
    { value: "Tool and Die Manufacturing", symbol: marker([100, 60, 160, 0.7]), label: "Tool and Die" },
    { value: "Welding / Brazing", symbol: marker([200, 160, 0, 0.7]), label: "Welding / Brazing" },
    { value: "Textiles", symbol: marker([230, 100, 150, 0.7]), label: "Textiles" },
    { value: "Manufacturing Automation", symbol: marker([60, 60, 200, 0.7]), label: "Manufacturing Automation" },
    { value: "Manufacturing Software", symbol: marker([100, 180, 220, 0.7]), label: "Manufacturing Software" },
    { value: "Freight / Shipping", symbol: marker([140, 140, 60, 0.7]), label: "Freight / Shipping" },
  ],
});

export const ClusterRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    style: "circle",
    color: [30, 100, 200, 0.6],
    size: 12,
    outline: new SimpleLineSymbol({ color: [255, 255, 255, 0.8], width: 1 }),
  }),
});
