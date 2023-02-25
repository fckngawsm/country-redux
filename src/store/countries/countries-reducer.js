import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-constants";

const initialState = {
  error: null,
  status: "idle",
  list: [],
};
export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES: {
      return {
        ...state,
        status: "complet",
        list: payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        status: "loading",
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};
