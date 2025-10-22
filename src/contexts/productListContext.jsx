import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const ProductsListContext = createContext();
const useProductsListContext = () => useContext(ProductsListContext);

function ProductsListProvider({ children }) {
  const [productsList, setProductsList] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState(null);

  const fetchProductsList = () => {
    axios
      .get(`${backendUrl}equipments`)
      .then((res) => setProductsList(res.data))
      .catch((err) => console.error(err));
  };

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
    <ProductsListContext.Provider
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
    </ProductsListContext.Provider>
  );
}
export { useProductsListContext, ProductsListProvider };
