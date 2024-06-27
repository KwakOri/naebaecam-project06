import { PropsWithChildren } from "react";
import { useOrderStore } from "../../store/store";
import { Order } from "../../types/schemas";

interface TOrderButton {
  onClick: (newOrder: Order) => void;
  value: Order;
}

export const OrderButton = ({
  children,
  onClick,
  value,
}: PropsWithChildren<TOrderButton>) => {
  const order = useOrderStore((state) => state.order);
  return (
    <>
      <button
        onClick={() => onClick(value)}
        className={` w-28 h-12 px-4 py-2 rounded-md hover:bg-[#f3f3f3] ${
          value === order
            ? "bg-[#FCFDFF] shadow-inner text-gray-400"
            : "bg-[#FCFDFF] shadow-md"
        }`}
      >
        {children}
      </button>
    </>
  );
};
