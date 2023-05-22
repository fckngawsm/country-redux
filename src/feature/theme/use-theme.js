import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./slice-theme";
export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const toggleTheme = () =>
    dispatch(setTheme(theme === "ligth" ? "dark" : "ligth"));
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return [theme , toggleTheme]
};
