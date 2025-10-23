// react import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pagine
import HomePage from "./pages/HomePage.jsx";
import WishListPage from "./pages/WishListPage";
import ProductsListPage from "./pages/ProductsListPage";
import DetailPage from "./pages/DetailPage";
import ComparePage from "./pages/ComparePage";
import NotFoundPage from "./pages/NotFoundPage";

// import context
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { WishListProvider } from "./contexts/WishListContext.jsx";
import { SearchBarProvider } from "./contexts/SearchBarContext.jsx";

// altri import

import paths from "./assets/data/paths";
import DefaultLayout from "./components/layoutComponents/DefaultLayout";

export default function App() {
  return (
    <>
      <ProductsProvider>
        <WishListProvider>
          <SearchBarProvider>
            <BrowserRouter>
              <Routes>
                <Route path={paths.notFoundPage} element={<NotFoundPage />} />
                <Route element={<DefaultLayout />}>
                  <Route path={paths.homePage} element={<HomePage />} />
                  <Route path={paths.wishListPage} element={<WishListPage />} />
                  <Route path={paths.comparePage} element={<ComparePage />} />
                  <Route
                    path={paths.productsListPage}
                    element={<ProductsListPage />}
                  />
                  <Route path={paths.detailPage} element={<DetailPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SearchBarProvider>
        </WishListProvider>
      </ProductsProvider>
    </>
  );
}
