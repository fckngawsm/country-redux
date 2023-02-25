export const selectCountriesinfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  length: state.countries.length,
});

export const selectVisibleCountries = (state, { search = "" }) => {
  return state.countries.list.filter((country) =>
    country.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
};
