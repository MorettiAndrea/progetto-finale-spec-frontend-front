import { useCompareContext } from "../contexts/CompareContext";
import CompareCard from "../components/cards/CompareCard";

export default function ComparePage() {
  const { compareList } = useCompareContext();

  if (!compareList.length)
    return (
      <h1 className="text-center text-white">
        Nessun prodotto selezionato per la pagina di comparazione
      </h1>
    );

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center text-white">Pagina di comparazione</h1>;
          <div className="col-12 d-center ">
            {compareList.map((p) => (
              <CompareCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
