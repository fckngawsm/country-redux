export const selectCountriesinfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  length: state.countries.length,
});
export const selectAllCountries = (state) => state.countries.list;
