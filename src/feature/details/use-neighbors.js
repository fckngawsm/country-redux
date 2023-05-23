import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNeighborsByBorder, selectNeighbours } from "./details-slice";

export const useNeighbors = (borders = []) => {
  const dispatch = useDispatch();
  const neighbours = useSelector(selectNeighbours);
  console.log(neighbours)
  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbours;
};
