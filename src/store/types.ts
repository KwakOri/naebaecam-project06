import { Order } from "../types/schemas";

export interface TOrderStore {
  order: Order;
  search: string;
  setOrder: (newOrder: Order) => void;
  setSearch: (newSearch: string) => void;
}
