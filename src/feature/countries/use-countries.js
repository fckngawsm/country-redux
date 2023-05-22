import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries-slice";
import { selectControlAll } from "../controls/controls-slice";
export const useCountries = () => {
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectControlAll);
  const { status, error, length } = useSelector(selectCountriesInfo);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
  useEffect(() => {
    if (!length) {
      dispatch(loadCountries());
    }
  }, [dispatch, length]);
  return [{ status, error }, countries];
};
