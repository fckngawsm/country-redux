import { useEffect } from "react";
import {
  clearDetails,
  loadingCountryByName,
  selectDetails,
} from "./details-slice";
import { useDispatch, useSelector } from "react-redux";
export const useDetails = (name) => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  useEffect(() => {
    dispatch(loadingCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);
  return details;
};
