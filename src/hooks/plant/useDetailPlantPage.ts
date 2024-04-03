import { editPlant } from "../../api/plant/editPlant.api";
import { PlantFormFields } from "../../interfaces/plant/formFields";

export const useDetailPlantPage = () => {
  const onSubmit = async (plant: PlantFormFields): Promise<void> => {
    await editPlant(
      plant.id,
      plant.name,
      plant.description,
      new Date(plant.atHomeSince),
      +plant.spotId
    );
  };

  return { onSubmit };
};
