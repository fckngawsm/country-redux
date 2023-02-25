import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-constants";

export const setCountries = (country) => ({
  type: SET_COUNTRIES,
  payload: country,
});

export const SetLoading = () => ({
  type: SET_LOADING,
});

export const SetError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadingCountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(SetLoading());
    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(setCountries(data)))
      .catch((err) => dispatch(SetError(err)));
  };
