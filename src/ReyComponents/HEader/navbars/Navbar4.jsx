import React from "react";

const Navbar4 = ({ setCategory, category }) => {
  const filters = [
    { label: "Barchasi", value: null },
    { label: "Elektronika", value: "Elektronika" },
    { label: "Smartfonlar", value: "Smartfonlar" },
    { label: "Mebel", value: "Mebel" },
  ];

  const baseBtn =
    "px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-200 transition";

  const activeBtn = "bg-purple-600 text-white";

  return (
    <div className="max-w-[60%] mx-auto py-2">
      <div className="flex gap-3">
        {filters.map((item) => (
          <button
            key={item.label}
            onClick={() => setCategory(item.value)}
            className={`${baseBtn} ${category === item.value ? activeBtn : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar4;