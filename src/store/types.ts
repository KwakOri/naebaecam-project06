import { Country, Order } from "../types/schemas";

export interface TOrderStore {
  order: Order;
  search: string;
  setOrder: (newOrder: Order) => void;
  setSearch: (newSearch: string) => void;
}

export interface TCountriesStore {
  countries: Country[];
  setCountries: (newCountries: Country[]) => void;
}
