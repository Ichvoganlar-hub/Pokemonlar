import { Link, useLocation } from "react-router-dom";

const Navbar4 = () => {
  const filters = [
    { label: "Barchasi", value: null },
    { label: "Elektronika", value: "Elektronika" },
    { label: "Smartfonlar", value: "Smartfonlar" },
    { label: "Mebel", value: "Mebel" },
  ];

  const baseBtn =
    "inline-flex items-center bg-gray-50 px-3 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition";
  const activeBtn = "bg-purple-600 text-white hover:bg-purple-600";

  const location = useLocation();
  const currentPath = location.pathname;
  const currentFilter = currentPath.startsWith("/category/")
    ? decodeURIComponent(currentPath.replace("/category/", ""))
    : null;

  return (
    <div className="max-w-[60%] mx-auto py-1">
      <div className="flex gap-3">
        {filters.map((item) => {
          const href = item.value ? `/category/${encodeURIComponent(item.value)}` : "/";
          const isActive = currentFilter === item.value;

          return (
            <Link
              key={item.label}
              to={href}
              className={`${baseBtn} ${isActive ? activeBtn : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar4;
