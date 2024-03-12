import { Link } from "react-router-dom";
import { PlantForm } from "../components/plant/PlantForm";
import { useAddPlantPage } from "../hooks/useAddPlantPage";

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
