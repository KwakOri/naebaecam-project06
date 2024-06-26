import { create } from "zustand";
import { TOrderStore } from "./types";

export const useOrderStore = create<TOrderStore>((set) => ({
  order: null,
  setOrder: (newOrder) => set(() => ({ order: newOrder })),
}));
