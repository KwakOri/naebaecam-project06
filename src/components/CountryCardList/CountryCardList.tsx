import _ from "lodash";
import { useOrderStore } from "../../store/store";
import { CountryInfo } from "../../types/country";
import CountryCard from "./CountryCard";
import ListTitle from "./ListTitle";
import NoResult from "./NoResult";

type CountryCardListProps = {
  countries: CountryInfo[];
  handleToggleIsFavorite: (id: string) => void;
  isFavorite: boolean;
  listTitle: string;
};

function CountryCardList({
  countries,
  handleToggleIsFavorite,
  isFavorite,
  listTitle,
}: CountryCardListProps) {
  const order = useOrderStore((state) => state.order);
  const search = useOrderStore((state) => state.search);
  switch (order) {
    case "PopularDesc":
      countries.sort((a, b) => b.population - a.population);
      break;
    case "PopularAsc":
      countries.sort((a, b) => a.population - b.population);
      break;
    case "AreaDesc":
      countries.sort((a, b) => b.area - a.area);
      break;
    case "AreaAsc":
      countries.sort((a, b) => a.area - b.area);
      break;
    default:
      countries.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ListTitle>{listTitle}</ListTitle>

      {_.find(
        filteredCountries,
        (country) => country.isFavorite === isFavorite
      ) ? (
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCountries
            .filter((item) => item.isFavorite === isFavorite)
            .map((item, i) => {
              return (
                <li key={i}>
                  <CountryCard onClick={handleToggleIsFavorite} {...item} />
                </li>
              );
            })}
        </ul>
      ) : (
        <NoResult />
      )}
    </>
  );
}

export default CountryCardList;
