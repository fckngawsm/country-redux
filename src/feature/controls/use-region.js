import { useDispatch, useSelector } from "react-redux";
import { selectRegion, setSearch } from "./controls-slice";

export const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);
  const changeSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [region, changeSearch];
};
