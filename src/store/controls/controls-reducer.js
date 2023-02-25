import { CLEAR_CONTROL, SET_REGION, SET_SEARCH } from "./controls-contants";

const initialState = {
  search: "",
  region: "",
};
export const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: payload,
      };
    }
    case SET_REGION: {
      return {
        ...state,
        region: payload,
      };
    }
    case CLEAR_CONTROL: {
      return {
        ...state,
        initialState
      };
    }
    default: {
      return state;
    }
  }
};
