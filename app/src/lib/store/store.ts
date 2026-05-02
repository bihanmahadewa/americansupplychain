import { configureStore } from "@reduxjs/toolkit";
import mapsReducer from "./features/arcgis";
import interactionsReducer from "./features/interactionsSlice";

export const store = configureStore({
  reducer: {
    maps: mapsReducer,
    interactions: interactionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
