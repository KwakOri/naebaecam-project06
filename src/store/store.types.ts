import { CountryInfo, Order } from "../types/country.types";

export interface TOrderStore {
  order: Order;
  search: string;
  setOrder: (newOrder: Order) => void;
  setSearch: (newSearch: string) => void;
}

export interface TCountriesStore {
  countries: CountryInfo[];
  setCountries: (newCountries: CountryInfo[]) => void;
}
