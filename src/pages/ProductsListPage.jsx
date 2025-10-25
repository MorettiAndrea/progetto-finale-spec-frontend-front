import { useSearchBarContext } from "../contexts/SearchBarContext";
import ProductCard from "../components/cards/ProductCard";
import { useState } from "react";

export default function ProductsListPage() {
  const { searchedItems } = useSearchBarContext();

  // placeholder compare da creare da context

  const [CompareList, setCompareList] = useState([]);

  // placeholder funzioni da importare dai context

  function onAddToWishlist() {
    console.log("whislist");
  }
  function onAddToCompare() {
    console.log("oncompare");
  }

  return (
    <>
      <h1 className="text-center">Lista dei prodotti</h1>
      <div className="row mx-1">
        {searchedItems.map((p) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={p.id}>
            <ProductCard
              product={p}
              onCompare={() => onAddToCompare(p)}
              onAddToWishlist={() => onAddToWishlist(p)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
