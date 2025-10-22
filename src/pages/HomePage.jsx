import { useProductsListContext } from "../contexts/productListContext";
import ProductCard from "../components/cards/ProductCard";
import { useState } from "react";

export default function HomePage() {
  const { productsList } = useProductsListContext();
  const [whisList, setWhisList] = useState([]);
  const [CompareList, setCompareList] = useState([]);

  function onAddToWishlist(product) {
    setWhisList((prev) => [...prev, product]);
  }
  function onAddToCompare(product) {
    setCompareList((prev) => [...prev, product]);
  }

  return (
    <>
      <h1 className="text-center">Sono la HomePage</h1>
      <div className="row">
        {productsList.map((p) => (
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
