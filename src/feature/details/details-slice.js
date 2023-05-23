import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: "idle",
  error: null,
};

export const loadingCountryByName = createAsyncThunk(
  "@@details/loading-current-country",
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  }
);

export const loadNeighborsByBorder = createAsyncThunk(
  "@@details/loading-neighbours",
  (code, { extra: { client, api } }) => {
    return client.get(api.filterByCode(code));
  }
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loadingCountryByName.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadingCountryByName.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadingCountryByName.fulfilled, (state, action) => {
      state.status = "completed";
      state.currentCountry = action.payload.data[0];
      state.error = null;
    });
    builder.addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
      state.neighbors = action.payload.data.map((country) => country.name);
    });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

// selectors

export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbours = (state) => state.details.neighbors;
