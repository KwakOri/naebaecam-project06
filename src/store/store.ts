import { create } from "zustand";
import { TOrderStore } from "./types";

export const useOrderStore = create<TOrderStore>((set) => ({
  order: null,
  search: "",
  setOrder: (newOrder) => set(() => ({ order: newOrder })),
  setSearch: (newSearch) => set(() => ({ search: newSearch })),
}));

export const useCountriesStore = create;
