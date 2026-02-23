import HeroSlider from "./HeroSlider";
import PromoRow from "./PromoRow";
import ProductSection from "./ProductSection";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { filterName } = useParams();
  const decodedFilter = filterName ? decodeURIComponent(filterName) : null;

  return (
    <div>
      <HeroSlider />
      <PromoRow />
      <ProductSection filterName={decodedFilter} />
    </div>
  );
};

export default HomePage;
