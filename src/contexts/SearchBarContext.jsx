import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { useProductsContext } from "./ProductsContext";

const SearchBarContext = createContext();
const useSearchBarContext = () => useContext(SearchBarContext);

function SearchBarProvider({ children }) {
  const { productsList, fetchProductsList } = useProductsContext();
  const [searchedTerm, setSearchedTerm] = useState("");
  const [searchedCategory, setSearchedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  //   effect per aggiornare i categoria e nome cercati nella searchbar

  useEffect(() => {
    fetchProductsList(searchedTerm, searchedCategory);
  }, [searchedTerm, searchedCategory]);

  const searchedItems = useMemo(() => {
    let filteredProducts = [...productsList];

    if (sortOrder) {
      const [key, direction] = sortOrder.split("-");
      filteredProducts.sort((a, b) => {
        if (direction === "asc") {
          return a[key].localeCompare(b[key]);
        } else {
          return b[key].localeCompare(a[key]);
        }
      });
    }

    return filteredProducts;
  }, [productsList, sortOrder]);

  return (
    <SearchBarContext.Provider
      value={{
        searchedTerm,
        setSearchedTerm,
        searchedCategory,
        setSearchedCategory,
        sortOrder,
        setSortOrder,
        searchedItems,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
}

export { SearchBarProvider, useSearchBarContext };
