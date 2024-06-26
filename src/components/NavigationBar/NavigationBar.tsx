import OrderOptions from "./OrderOptions";
import SearchBar from "./SearchBar";

function NavigationBar() {
  return (
    <div className="flex items-center justify-between">
      <OrderOptions />
      <SearchBar />
    </div>
  );
}

export default NavigationBar;
