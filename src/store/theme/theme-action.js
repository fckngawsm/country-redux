import { SET_THEME } from "./theme-contants";

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});
