import { useNavigate } from "react-router-dom";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { useDispatch, useSelector } from "react-redux";
import {
  selectVisibleCountries,
  selectCountriesInfo,
} from "../store/countries/countries-selectors";
import { useEffect } from "react";
import { loadingCountries } from "../store/countries/countries-action";
import { selectControlAll } from "../store/controls/controls-selectors";

export const HomePage = () => {
  const { status, error, length } = useSelector(selectCountriesInfo);
  const { search, region } = useSelector(selectControlAll);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
  useEffect(() => {
    if (!length) {
      dispatch(loadingCountries());
    }
  }, [dispatch, length]);
  return (
    <>
      <Controls />
      {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "complet" && (
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
};
