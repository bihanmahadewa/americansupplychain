import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { CompanyPin, PointI, GeoJSON } from "@/lib/types";

interface MapState {
  PointLayers: GeoJSONLayer;
  PointMetadata: GeoJSON<PointI> | undefined;
  companies: CompanyPin[];
  loading: boolean;
  error: string | null;
}

const initialState: MapState = {
  PointLayers: {} as GeoJSONLayer,
  PointMetadata: undefined,
  companies: [],
  loading: false,
  error: null,
};

export const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    PointLayers: (state, action: PayloadAction<GeoJSONLayer>) => {
      (state.PointLayers as unknown as GeoJSONLayer) = action.payload;
    },
    PointMetadata: (state, action: PayloadAction<GeoJSON<PointI>>) => {
      state.PointMetadata = action.payload;
    },
    setCompanies: (state, action: PayloadAction<CompanyPin[]>) => {
      state.companies = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const mapActions = mapSlice.actions;
export default mapSlice.reducer;
