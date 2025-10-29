import { Outlet } from "react-router-dom";
import Header from "./Header";
import WishListModal from "../modals/WishListModal";
import Footer from "./Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <WishListModal />
      <Footer />
    </>
  );
}
