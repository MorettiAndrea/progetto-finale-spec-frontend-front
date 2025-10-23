import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ProductsContext = createContext();
const useProductsContext = () => useContext(ProductsContext);

function ProductsProvider({ children }) {
  const [productsList, setProductsList] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState(null);

  // funzione per recupero prodotti con  parametri searchbar

  const fetchProductsList = (searchTerm = "", category = "") => {
    const params = {};
    if (searchTerm) params.search = searchTerm;
    if (category) params.category = category;

    axios
      .get(`${backendUrl}equipments`, { params })
      .then((res) => setProductsList(res.data))
      .catch((err) => console.error(err));
  };

  // funzione per singolo prodotto
  const fetchProductById = (id) => {
    if (!id) return;

    axios
      .get(`${backendUrl}equipments/${id}`)
      .then((res) => setSearchedProduct(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        setProductsList,
        searchedProduct,
        setSearchedProduct,
        fetchProductsList,
        fetchProductById,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { useProductsContext, ProductsProvider };
