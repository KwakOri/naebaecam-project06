import { CountryInfo } from "../../types/country";
import CountryCard from "./CountryCard";
import ListTitle from "./ListTitle";

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
  return (
    <>
      <ListTitle>{listTitle}</ListTitle>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {countries
          .filter((item) => item.isFavorite === isFavorite)
          .map((item, i) => {
            return (
              <li key={i}>
                <CountryCard onClick={handleToggleIsFavorite} {...item} />
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default CountryCardList;
