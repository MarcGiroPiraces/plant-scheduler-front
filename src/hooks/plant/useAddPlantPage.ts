import { addPlant } from "../../api/plant/addPlant.api";
import { PlantFormFields } from "../../interfaces/plant/formFields";

export const useAddPlantPage = () => {
  const onSubmit = async (plant: PlantFormFields): Promise<void> => {
    console.log(plant);
    await addPlant(
      plant.name,
      plant.description,
      plant.atHomeSince,
      +plant.spotId
    );
  };

  return { onSubmit };
};
