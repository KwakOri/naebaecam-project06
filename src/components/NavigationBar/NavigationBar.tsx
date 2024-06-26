import OrderOptions from "./OrderOptions";
import SearchBar from "./SearchBar";

function NavigationBar() {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row lg:flex-row">
      <OrderOptions />
      <SearchBar />
    </div>
  );
}

export default NavigationBar;
