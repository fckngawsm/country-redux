import { SET_SEARCH } from "./controls-contants";

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
