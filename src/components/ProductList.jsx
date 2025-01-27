import ProductCards from "./ProductCards";
import Adidas from "../assets/adidas-ultraboost.jpg";
import NB from "../assets/new-balance-574.png";
import Nike from "../assets/NIKE-AIR-MAX.png";
import Puma from "../assets//puma-rs-x.jpg";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 120,
      available: true,
      thumbnail: Nike,
    },
    {
      id: 2,
      name: "Adidas UltraBoost",
      price: 180,
      available: false,
      thumbnail: Adidas,
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: 110,
      available: true,
      thumbnail: Puma,
    },
    {
      id: 4,
      name: "New Balance 574",
      price: 100,
      available: true,
      thumbnail: NB,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCards key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductList;
