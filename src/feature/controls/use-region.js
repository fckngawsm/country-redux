import { useDispatch, useSelector } from "react-redux";
import { selectRegion, setRegion } from "./controls-slice";

export const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);
  const changeSearch = (reg) => {
    dispatch(setRegion(reg?.value || ""));
  };

  return [region, changeSearch];
};
