import { useSearchBarContext } from "../contexts/SearchBarContext";
import ProductsCard from "../components/cards/ProductsCard";
import { useState } from "react";

export default function ProductsListPage() {
  const { searchedItems } = useSearchBarContext();

  // placeholder compare da creare da context

  const [CompareList, setCompareList] = useState([]);

  // placeholder funzioni da importare dai context

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
