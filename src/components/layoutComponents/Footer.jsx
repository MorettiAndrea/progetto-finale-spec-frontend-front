import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center text-md-start mt-5">
      {/* Sezione superiore: logo e motto */}
      <section className="d-flex justify-content-between align-items-center p-4 border-bottom border-secondary flex-wrap">
        <div className="mb-2 mb-md-0">
          <h2 className="fw-bold text-uppercase m-0">BoolFit</h2>
          <p className="m-0 fst-italic small text-secondary">
            "Spingi oltre i tuoi limiti, ogni giorno."
          </p>
        </div>

        <div>
          <span className="me-3 text-secondary fw-semibold">
            Seguici sui social:
          </span>
          <Link to="#" className="me-3 text-light text-decoration-none">
            Facebook
          </Link>
          <Link to="#" className="me-3 text-light text-decoration-none">
            Twitter
          </Link>
          <Link to="#" className="me-3 text-light text-decoration-none">
            Instagram
          </Link>
          <Link to="#" className="text-light text-decoration-none">
            YouTube
          </Link>
        </div>
      </section>

      {/* Sezioni di link rapide */}
      <section className="container text-center text-md-start mt-4">
        <div className="row mt-3">
          {/* Colonna 1 */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">BoolFit</h6>
            <hr
              className="mb-2 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: "#f8f9fa",
                height: "2px",
              }}
            />
            <p className="text-secondary small">
              Il tuo negozio online per attrezzi sportivi di qualità. Dalle
              palestre alle corse all’aperto, abbiamo tutto ciò che ti serve per
              dare il massimo.
            </p>
          </div>

          {/* Colonna 2 */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Prodotti</h6>
            <hr
              className="mb-2 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: "#f8f9fa",
                height: "2px",
              }}
            />
            <p>
              <Link to="#" className="text-secondary text-decoration-none">
                Tapis roulant
              </Link>
            </p>
            <p>
              <Link to="#" className="text-secondary text-decoration-none">
                Manubri
              </Link>
            </p>
            <p>
              <Link to="#" className="text-secondary text-decoration-none">
                Cyclette
              </Link>
            </p>
            <p>
              <Link to="#" className="text-secondary text-decoration-none">
                Accessori yoga
              </Link>
            </p>
          </div>

          {/* Colonna 3 */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Link utili</h6>
            <hr
              className="mb-2 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: "#f8f9fa",
                height: "2px",
              }}
            />
            <p>
              <Link to="#" className="text-secondary text-decoration-none">
                Chi siamo
              </Link>
            </p>
            <p>
              <Link to="#" className="text-secondary text-decoration-none">
                Contatti
              </Link>
            </p>
            <p>
              <Link to="#" className="text-secondary text-decoration-none">
                FAQ
              </Link>
            </p>
            <p>
              <Link to="#" className="text-secondary text-decoration-none">
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Colonna 4 */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contatti</h6>
            <hr
              className="mb-2 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: "#f8f9fa",
                height: "2px",
              }}
            />
            <p className="text-secondary small">Via dello Sport 42, Roma</p>
            <p className="text-secondary small">info@boolfit.com</p>
            <p className="text-secondary small">+39 06 06060606</p>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-3 border-top border-secondary small text-secondary">
        © {new Date().getFullYear()} BoolFit - Tutti i diritti riservati.
      </div>
    </footer>
  );
}
