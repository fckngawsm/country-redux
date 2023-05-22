import React from "react";

import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { useNavigate } from "react-router-dom";
import { useCountries } from "./use-countries";

function CountryList() {
  const navigate = useNavigate();
  const [{ status, error }, countries] = useCountries();
  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "completed" && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
}

export default CountryList;
