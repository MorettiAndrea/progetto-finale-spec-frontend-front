import { useSearchBarContext } from "../contexts/SearchBarContext";
import ProductCard from "../components/cards/ProductCard";
import { useState } from "react";

export default function HomePage() {
  const { searchedItems } = useSearchBarContext();

  // placeholder compare da creare da context

  const [CompareList, setCompareList] = useState([]);

  // placeholder funzioni da importare dai context

  function onAddToWishlist(product) {
    setWhisList((prev) => [...prev, product]);
  }
  function onAddToCompare(product) {
    setCompareList((prev) => [...prev, product]);
  }

  return (
    <>
      <h1 className="text-center">Lista dei prodotti</h1>
      <div className="row">
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
