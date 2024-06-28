import { useEffect, useState } from "react";
import "./App.css";
import CountryCardList from "./components/CountryCardList";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useToast } from "./contexts/Toast.context";
import { useCountries } from "./query/country";
import { CountryInfo } from "./types/schemas";

function App() {
  const toast = useToast();
  const [countries, setCountries] = useState<CountryInfo[]>([]);

  const handleToggleIsFavorite = (id: CountryInfo["id"]) =>
    setCountries((prev) =>
      prev.map((country) => {
        if (country.id !== id) return country;

        if (country.isFavorite) {
          toast.add({
            title: `목록 제거`,
            content: `"${country.name}"이 목록에서 제거되었습니다.`,
            time: 5000,
          });
        } else {
          toast.add({
            title: `목록 추가`,
            content: `"${country.name}"이 목록에 추가되었습니다.`,
            time: 5000,
          });
        }
        return { ...country, isFavorite: !country.isFavorite };
      })
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
        listTitle="내가 좋아하는 나라"
        countries={countries}
        handleToggleIsFavorite={handleToggleIsFavorite}
        isFavorite={true}
      />
      <CountryCardList
        listTitle="모든 나라"
        countries={countries}
        handleToggleIsFavorite={handleToggleIsFavorite}
        isFavorite={false}
      />
    </>
  );
}

export default App;
