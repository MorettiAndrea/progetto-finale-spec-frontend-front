import { useEffect } from "react";
import DetailCard from "../components/cards/DetailCard";
import { useProductsContext } from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
export default function DetailPage() {
  const { id } = useParams();
  const { searchedProduct, fetchProductById } = useProductsContext();

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  if (!searchedProduct) {
    return <p>Caricamento prodotto...</p>;
  }
  return (
    <>
      <h1 className="text-center">Sono la DetailPage</h1>
      <DetailCard product={searchedProduct} />
    </>
  );
}
