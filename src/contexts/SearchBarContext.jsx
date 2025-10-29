import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { useProductsContext } from "./ProductsContext";

const SearchBarContext = createContext();
const useSearchBarContext = () => useContext(SearchBarContext);

function SearchBarProvider({ children }) {
  // stati
  const { productsList, fetchProductsList } = useProductsContext();
  const [searchedTerm, setSearchedTerm] = useState("");
  const [searchedCategory, setSearchedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // funzione debounce con callback

  const debouncedFetchList = useCallback(() => {
    fetchProductsList(searchedTerm, searchedCategory);
  }, [searchedTerm, searchedCategory, fetchProductsList]);

  //   effect per aggiornare i categoria e nome cercati nella searchbar

  useEffect(() => {
    const useDebouncedFetchList = setTimeout(() => {
      debouncedFetchList();
    }, 500);
    return () => clearTimeout(useDebouncedFetchList);
  }, [debouncedFetchList]);

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
