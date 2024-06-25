import { useQuery } from "@tanstack/react-query";
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

  const { data, isLoading } = useQuery<Country[], Error, CountryInfo[]>({
    queryKey: ["countries"],
    queryFn: getData,
    select: (data: Country[]) => {
      return data.map((country) => ({
        id: crypto.randomUUID(),
        name: country.name.common,
        capital: country.capital?.[0],
        flagUrl: country.flags.svg,
        isFavorite: false,
      }));
    },
  });
  useEffect(() => {
    if (data) setCountries(data);
  }, [isLoading]);

  if (isLoading) return <>Loading...</>;

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
