import { SET_SEARCH } from "./controls-contants";

const initialState = {
  search: "",
  region: "",
};
export const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH: {
        return {
            ...state,
            search:payload
        }
    }
    default: {
      return state;
    }
  }
};