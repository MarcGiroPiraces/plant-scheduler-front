import { PlantForm } from "../components/plant/PlantForm";
import { useAddPlantPage } from "../hooks/plant/useAddPlantPage";

export function AddPlantPage() {
  const { onSubmit } = useAddPlantPage();

  return (
    <>
      <h1>Afegir planta</h1>
      <PlantForm actionOnSubmit={onSubmit} />
    </>
  );
}
