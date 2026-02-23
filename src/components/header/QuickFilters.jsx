import { Link } from "react-router-dom";

const FILTERS = [
  { label: "Barchasi", path: "/" },
  { label: "Elektronika", path: "/category/Elektronika" },
  { label: "Smartfonlar", path: "/category/Smartfonlar" },
  { label: "Mebel", path: "/category/Mebel" },
];

const QuickFilters = () => {
  return (
    <div className="max-w-[60%] mx-auto py-2">
      <div className="flex gap-3">
        {FILTERS.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-purple-600 hover:text-white transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickFilters;
