import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search for mentors..." }) => {
  return (
    <div className="relative w-full max-w-[464px] h-[45px]  flex items-center rounded-md border border-[#324A6D40] px-4">
      <div className="flex items-center justify-center w-5 h-5 mr-2">
        <IoSearchOutline className="text-[#9B59B6] w-full h-full" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 font-poppins text-sm md:text-base text-[#324A6D] placeholder-opacity-50 placeholder-[#324A6D] outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBar;