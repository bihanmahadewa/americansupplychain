// Hooks
import { useState } from "react";

// Components
import { ArcGIS } from "./Map";
import { Explorer } from "./Explorer";

// Types
import Graphic from "@arcgis/core/Graphic.js";

export const Interface = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_graphic, setGraphic] = useState<Graphic | undefined>();

  return (
    <div className="w-full h-full bg-black px-4 grid grid-cols-3">
      <div className="col-span-1 p-4 h-[calc(90vh)] overflow-y-auto">
        <div className="prose">
          <h2>American Supply Chain Explorer</h2>
          <p>Explore U.S. manufacturing infrastructure</p>
        </div>
        <div className="py-2">
          <div className="collapse bg-base-200 border-base-300 border">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Instructions</div>
            <div className="collapse-content text-sm">
              <div className="prose">
                <p>
                  Search for manufacturing companies by name, category, city, or
                  state. Click a company to fly to its location on the map.
                  Points are colored by industry category.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Explorer />
      </div>
      <div className="col-span-2">
        <ArcGIS setGraphic={setGraphic} />
      </div>
    </div>
  );
};
