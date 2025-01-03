import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="p-8 ">
      <div className="mt-40 flex flex-row">
        <div className=" basis-1/5"></div>
        <div className="  basis-4/5">
          <p className=" ms-2 text-xl font-bold grid  ">All Products</p>
          <ProductList />
        </div>
      </div>
    </div>
  );
}
