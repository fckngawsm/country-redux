import { SET_REGION, SET_SEARCH } from "./controls-contants";

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});
