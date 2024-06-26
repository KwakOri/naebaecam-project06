import { useEffect, useState } from "react";
import "./App.css";
import CountryCardList from "./components/CountryCardList";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useCountries } from "./query/country";
import { CountryInfo } from "./types/country";

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

  const { data, isLoading } = useCountries();
  useEffect(() => {
    if (data) setCountries(data);
  }, [isLoading]);

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <NavigationBar />
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
