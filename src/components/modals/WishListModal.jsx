import ReactDOM from "react-dom";
import { useWishListContext } from "../../contexts/WishListContext";
import WishListTable from "../table/WishListTable";

export default function WishListModal() {
  const { wishList, showModal, setShowModal } = useWishListContext();

  if (!showModal) return null;

  const content =
    wishList.length === 0 ? (
      <h5 className="text-center my-4">La tua lista dei preferiti è vuota!</h5>
    ) : (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <strong>Nome</strong>
              </th>
              <th>
                <strong>Categoria</strong>
              </th>
              <th>
                <strong>Prezzo</strong>
              </th>
              <th>
                <strong>Pagina Dettaglio </strong>
              </th>
              <th className="text-danger">
                <strong>Elimina prodotto</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {wishList.map((p) => (
              <WishListTable key={p.id} product={p} />
            ))}
          </tbody>
        </table>
      </div>
    );

  const modalContent = (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow rounded-3">
          <div className="modal-header border-0">
            <h2 className="modal-title w-100 text-center text-danger">
              {wishList.length ? "I tuoi preferiti" : ""}
            </h2>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer border-0 d-flex justify-content-center gap-2">
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-secondary"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("root-wishlist-modal")
  );
}
