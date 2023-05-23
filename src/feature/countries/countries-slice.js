import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: "idle",
  error: null,
  list: [],
};

export const loadCountries = createAsyncThunk(
  "countries/loading-countries",
  (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES);
  }
);

const coutriesSlice = createSlice({
  name: "@@country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCountries.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadCountries.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadCountries.fulfilled, (state, action) => {
      state.status = "completed";
      state.list = action.payload.data;
      state.error = null;
    });
  },
});

export const countriesReducer = coutriesSlice.reducer;
// selectors
export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  length: state.countries.list.length,
});

export const selectVisibleCountries = (state, { search = "", region = "" }) => {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
      country.region.includes(region)
  );
};
