import {
  SET_ERROR,
  SET_LOADING,
  SET_COUNTRY,
  CLEAR_DETAILS,
  SET_NEIGHNOURS,
} from "./details-constants";

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

export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});

export const setNeighbours = (neighbours) => ({
  type: SET_NEIGHNOURS,
  payload: neighbours,
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

export const loadingNeighnoursDetails =
  (code) =>
  (dispatch, _, { api, client }) => {
    client
      .get(api.filterByCode(code))
      .then(({ data }) =>
        dispatch(setNeighbours(data.map((country) => country.name)))
      )
      .catch(console.error);
  };
