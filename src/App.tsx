import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./api/api.countries";
import CountryCardList from "./components/CountryCardList";
import { Country, CountryInfo } from "./types/country";

function App() {
  const [countries, setCountries] = useState<CountryInfo[]>([]);
  const handleToggleIsFavorite = (id: CountryInfo["id"]) =>
    setCountries((prev) =>
      prev.map((country) =>
        country.id === id
          ? { ...country, isFavorite: !country.isFavorite }
          : country
      )
    );

  useEffect(() => {
    const getCountryList = async () => {
      const response = await getData();
      const data: Country[] = await response.json();
      console.log(data);
      const countries: CountryInfo[] = data.map((country) => ({
        id: crypto.randomUUID(),
        name: country.name.common,
        capital: country.capital?.[0],
        flagUrl: country.flags.svg,
        isFavorite: false,
      }));
      setCountries(countries);
    };
    getCountryList();
  }, []);
  return (
    <>
      <CountryCardList
        listTitle="My Favorite Countries"
        countries={countries}
        handleToggleIsFavorite={handleToggleIsFavorite}
        isFavorite={true}
      />
      <CountryCardList
        listTitle="All Countries"
        countries={countries}
        handleToggleIsFavorite={handleToggleIsFavorite}
        isFavorite={false}
      />
    </>
  );
}

export default App;
