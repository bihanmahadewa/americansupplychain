import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InteractionsState = {
  coordinates: [number, number] | null;
};

const initialState: InteractionsState = {
  coordinates: null,
};

const interactionsSlice = createSlice({
  name: "interactions",
  initialState,
  reducers: {
    setCoordinates(state, action: PayloadAction<[number, number] | null>) {
      state.coordinates = action.payload;
    },
  },
});

export const { setCoordinates } = interactionsSlice.actions;
export default interactionsSlice.reducer;
