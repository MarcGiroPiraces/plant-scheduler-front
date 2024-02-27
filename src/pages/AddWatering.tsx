import { Link } from "react-router-dom";
import { useAddWateringPage } from "../hooks/useAddWateringPage";
import { WateringForm } from "../watering/components/WateringForm";

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
