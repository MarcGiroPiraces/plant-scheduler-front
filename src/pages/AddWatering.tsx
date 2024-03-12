import { Link } from "react-router-dom";
import { WateringForm } from "../components/watering/WateringForm";
import { useAddWateringPage } from "../hooks/watering/useAddWateringPage";

export function AddWateringPage() {
  const { onSubmit } = useAddWateringPage();

  return (
    <>
      <Link to={`/`}>Tornar a la llista de plantes</Link>
      <h1>Afegir reg</h1>
      <WateringForm actionOnSubmit={onSubmit} />
    </>
  );
}
