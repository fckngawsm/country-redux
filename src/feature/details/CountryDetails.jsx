import React from "react";
import { useDetails } from "./use-details";
import { Info } from "./Info";

function CountryDetails({ name = "", navigate }) {
  const { currentCountry, error, status } = useDetails(name);
  return (
    <>
      {status === "loading" ? <h2>loading...</h2> : null}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
}

export default CountryDetails;
