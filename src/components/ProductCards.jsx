function ProductCards({ product }) {
  return (
    <div className="border p-2 shadow-sm rounded-lg">
      <img src={product.thumbnail} alt={product.name} className="" />
      <h3>{product.name}</h3>
    </div>
  );
}
export default ProductCards;
