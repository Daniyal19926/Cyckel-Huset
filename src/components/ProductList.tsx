import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="mt-2 grid grid-cols-3 gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
