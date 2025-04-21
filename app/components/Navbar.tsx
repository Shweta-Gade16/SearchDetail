import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import SearchBar from "./SearchBar";

const NavBar: React.FC = () => {
  return (
    <div className="relative">
      <nav className="w-full h-auto sm:px-10 relative z-10 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={192} 
              height={48} 
              className="w-[120px] sm:w-[192px] h-auto"
            />
            <div className="flex items-center gap-4 sm:hidden">
              <Link
                href="/Login-page"
                className="font-Poppins font-semibold text-sm text-[#324A6D]"
              >
                Login
              </Link>
              <Button text="Sign Up" />
            </div>
          </div>
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="w-full max-w-[600px] bg-white  rounded-md z-20">
              <SearchBar />
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/Login-page"
              className="font-Poppins font-semibold text-sm text-[#324A6D]"
            >
              Login
            </Link>
            <Button text="Sign Up" />
          </div>
        </div>
        <div className="w-full mt-4 sm:hidden flex justify-center bg-[#F4F4F4] py-4 px-4 rounded-md">
          <div className="w-full max-w-[600px] rounded-md bg-white">
            <SearchBar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;