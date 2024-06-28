import { TYPE_ADD, TYPE_DELETE } from "../constants/constants";

type ToastType = typeof TYPE_DELETE | typeof TYPE_ADD;

export interface TToast {
  title: string;
  content: string;
  time: number;
  type: ToastType;
  id?: string;
}
