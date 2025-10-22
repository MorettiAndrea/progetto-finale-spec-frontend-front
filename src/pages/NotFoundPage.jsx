import paths from "../assets/data/paths";
import { useNavigate, Link } from "react-router-dom";
export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center my-5">
        <h3 className="text-center">
          Oops! Qualcosa è andato storto. Sembra che questa pagina non esista
          più.
        </h3>
        <h3 className="text-center">
          <Link className="text-center no-decoration" to={paths.homePage}>
            Clicca qui per tornare alla pagina principale
          </Link>
        </h3>
      </div>
      ;
    </>
  );
}
