import {
  AREA_ASC,
  AREA_DESC,
  POPULAR_ASC,
  POPULAR_DESC,
} from "../../constants/constants";
import { useOrderStore } from "../../store/store";
import { Order } from "../../types/country.types";
import { OrderButton } from "./OrderButton";

const OrderOptions = () => {
  const { setOrder } = useOrderStore();
  const order = useOrderStore((state) => state.order);
  const handleClickButton = (newOrder: Order) => {
    if (order === newOrder) {
      setOrder(null);
    } else {
      setOrder(newOrder);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-16 gap-4 md:max-w-[600px] lg:w-[600px] md:mr-4 lg:mr-4">
      <ul className="flex gap-4 ">
        <li>
          <OrderButton onClick={handleClickButton} value={POPULAR_DESC}>
            인구많은순
          </OrderButton>
        </li>
        <li>
          <OrderButton onClick={handleClickButton} value={POPULAR_ASC}>
            인구적은순
          </OrderButton>
        </li>
        <li>
          <OrderButton onClick={handleClickButton} value={AREA_DESC}>
            면적넓은순
          </OrderButton>
        </li>
        <li>
          <OrderButton onClick={handleClickButton} value={AREA_ASC}>
            면적좁은순
          </OrderButton>
        </li>
      </ul>
    </div>
  );
};

export default OrderOptions;
