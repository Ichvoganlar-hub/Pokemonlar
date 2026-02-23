import TopNavbar from "./TopNavbar";
import MainNavbar from "./MainNavbar";
import QuickFilters from "./QuickFilters";

const Header = () => {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
      <QuickFilters />
      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700"
      >
        ^
      </button>
    </div>
  );
};

export default Header;
