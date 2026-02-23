const PROMOS = [
  {
    title: "Onalar va bolalar uchun",
    image: "https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b",
  },
  {
    title: "Arzon narx kafolati",
    image: "https://static.uzum.uz/static/promo_images/a266cae1-db3a-4b40-a984-cf9220d9b2e8",
  },
  {
    title: "Zamonaviy bozor",
    image: "https://static.uzum.uz/static/promo_images/c10db340-70a3-4299-9e73-c80f73a41c63",
  },
  {
    title: "Onalar va bolalar uchun",
    image: "https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b",
  },
];

const PromoRow = () => {
  return (
    <div className="max-w-[60%] mx-auto pb-10">
      <div className="flex justify-center items-center gap-6">
        {PROMOS.map((promo, index) => (
          <div
            key={`${promo.title}-${index}`}
            className="flex justify-center items-center gap-2 bg-gray-100 py-2.5 rounded-2xl hover:bg-gray-200 transition-all px-1 w-[290px]"
          >
            <img className="w-10" src={promo.image} alt={promo.title} />
            <p>{promo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoRow;
