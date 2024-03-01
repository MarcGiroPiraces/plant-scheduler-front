import { Link } from "react-router-dom";
import { useAddPlantPage } from "../hooks/useAddPlantPage";
import { PlantForm } from "../plant/components/PlantForm";

export function AddPlantPage() {
  const { onSubmit } = useAddPlantPage();

  return (
    <>
      <Link to={`/`}>Tornar a la llista de plantes</Link>
      <h1>Afegir planta</h1>
      <PlantForm actionOnSubmit={onSubmit} />
    </>
  );
}
