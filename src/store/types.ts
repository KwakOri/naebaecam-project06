import { Order } from "../types/country";

export interface TOrderStore {
  order: Order;
  setOrder: (newOrder: Order) => void;
}
