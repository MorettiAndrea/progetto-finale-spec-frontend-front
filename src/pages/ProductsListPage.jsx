import { useSearchBarContext } from "../contexts/SearchBarContext";
import ProductsCard from "../components/cards/ProductsCard";

export default function ProductsListPage() {
  const { searchedItems } = useSearchBarContext();

  return (
    <>
      <h1 className="text-center">Lista dei prodotti</h1>
      <div className="row mx-1">
        {searchedItems.map((p) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={p.id}>
            <ProductsCard product={p} />
          </div>
        ))}
      </div>
    </>
  );
}
