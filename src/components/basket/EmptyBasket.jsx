import { Link } from "react-router-dom";

const EmptyBasket = () => {
  return (
    <div className="container mx-auto w-[85%]">
      <div className="flex items-center justify-center flex-col gap-10">
        <img src="http://www.serebii.net/pokemongo/pokemon/002.png" alt="" />
        <div className="flex items-center justify-center flex-col gap-12">
          <h2 className="text-2xl">Savatingiz hozircha bo'sh</h2>
          <p className="text-[18px] text-center w-125">
            Bosh sahifadan boshlang, kerakli tovarni qidiruv orqali topishingiz yoki
            to'plamlarni ko'rishingiz mumkin.
          </p>
          <Link to="/">
            <button className="bg-gray-200 py-2 rounded-[10px] px-2 hover:bg-gray-300">
              Bosh sahifaga
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyBasket;
