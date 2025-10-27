import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ProductsContext = createContext();
const useProductsContext = () => useContext(ProductsContext);

function ProductsProvider({ children }) {
  const [productsList, setProductsList] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [allCategories, setAllCategories] = useState([]);

  // funzione tutti prodotti con parametri dinamici,da stabilire con useState nella searchbar

  const fetchProductsList = (searchTerm = "", category = "") => {
    const params = {};
    if (searchTerm) params.search = searchTerm;
    if (category) params.category = category;

    axios
      .get(`${backendUrl}equipments`, { params })
      .then((res) => setProductsList(res.data))
      .catch((err) => console.error(err));
  };

  // Recupero tutte le categorie per la search

  const extractCategories = async () => {
    const categories = [];
    try {
      const response = await axios.get(`${backendUrl}equipments`);
      if (!response) throw new Error("Ops! Qualcosa è andato storto");

      response.data.forEach((p) => {
        if (!categories.includes(p.category)) {
          categories.push(p.category);
        }
      });
      return categories;
    } catch (err) {
      console.error("Errore nel recupero delle categorie", err.message);
    }
  };

  // funzione per singolo prodotto
  const fetchProductById = (id) => {
    if (!id) return;

    axios
      .get(`${backendUrl}equipments/${id}`)
      .then((res) => setSearchedProduct(res.data.equipment))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProductsList();
    extractCategories().then((cats) => setAllCategories(cats));
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
        extractCategories,
        allCategories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { useProductsContext, ProductsProvider };
