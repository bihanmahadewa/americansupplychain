import LabelClass from "@arcgis/core/layers/support/LabelClass";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";

export const CompanyLabels = new LabelClass({
  labelExpressionInfo: { expression: "$feature.name" },
  symbol: new TextSymbol({
    color: "white",
    haloColor: "black",
    haloSize: 1,
    font: {
      family: "Arial",
      size: 10,
      weight: "normal",
    },
  }),
  labelPlacement: "above-right",
  minScale: 150000,
  maxScale: 0,
});
