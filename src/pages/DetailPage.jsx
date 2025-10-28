import { useEffect } from "react";
import DetailCard from "../components/cards/DetailCard";
import { useProductsContext } from "../contexts/ProductsContext";
import { Link, useParams } from "react-router-dom";
import paths from "../assets/data/paths";

export default function DetailPage() {
  const { id } = useParams();
  const { searchedProduct, fetchProductById } = useProductsContext();

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  if (!searchedProduct) {
    return (
      <>
        <div className="container d-center">
          <h2 className="text-center text-white my-5 ">
            <Link className="no-decoration-white" to={paths.productsListPage}>
              Prodotto non trovato clicca qui per tornare alla lista dei
              prodotti
            </Link>
          </h2>
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="text-center">Sono la DetailPage</h1>
      <DetailCard product={searchedProduct} />
    </>
  );
}
