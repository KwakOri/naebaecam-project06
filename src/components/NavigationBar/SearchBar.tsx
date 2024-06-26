import { useOrderStore } from "../../store/store";

const SearchBar = () => {
  const search = useOrderStore((state) => state.search);
  const setSearch = useOrderStore((state) => state.setSearch);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <div className="flex items-center justify-center w-full h-16 md:justify-end lg:justify-end">
      <input
        className=" grow max-w-[500px] w-full md:w-80 lg:w-80 h-12 px-4 py-2 rounded-md shadow-md bg-[#FCFDFF] focus:outline-none focus:shadow-inner"
        value={search}
        onChange={handleSearchChange}
        id="search"
        name="search"
        type="text"
        placeholder="검색어를 입력해주세요"
      />
    </div>
  );
};

export default SearchBar;
