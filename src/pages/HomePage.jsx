import { NavLink } from "react-router-dom";
import HeroSection from "../components/layoutComponents/HeroSection";
import paths from "../assets/data/paths";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <h2 className="text-center my-5">
          <NavLink className="no-decoration-white " to={paths.productsListPage}>
            Visita la nostra sezione dedicata agli attrezzi!
          </NavLink>
        </h2>
        <HeroSection />
      </div>
    </>
  );
}
