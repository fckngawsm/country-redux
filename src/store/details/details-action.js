import { SET_ERROR, SET_LOADING, SET_COUNTRY } from "./details-constants";

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const loadingCountryDetails =
  (name) =>
  (dispatch, _, { api, client }) => {
    dispatch(setLoading());
    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };
