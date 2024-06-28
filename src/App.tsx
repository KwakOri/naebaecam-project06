import { useEffect } from "react";
import "./App.css";
import CountryCardList from "./components/CountryCardList";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useCountries } from "./query/country";
import { useCountriesStore } from "./store/store";

function App() {
  const { countries, setCountries } = useCountriesStore();

  const { data, isLoading } = useCountries();
  useEffect(() => {
    if (data) setCountries(data);
  }, [isLoading]);

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <NavigationBar />
      <CountryCardList
        listTitle="내가 좋아하는 나라"
        countries={countries}
        isFavorite={true}
      />
      <CountryCardList
        listTitle="모든 나라"
        countries={countries}
        isFavorite={false}
      />
    </>
  );
}

export default App;
