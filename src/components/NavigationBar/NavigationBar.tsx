import OrderOptions from "./OrderOptions";
import SearchBar from "./SearchBar";

function NavigationBar() {
  return (
    <div className=" sticky top-0 bg-[#FCFDFF] flex flex-col items-center justify-between p-4 shadow-md md:flex-row lg:flex-row">
      <OrderOptions />
      <SearchBar />
    </div>
  );
}

export default NavigationBar;
