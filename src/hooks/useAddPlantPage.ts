import { addPlant } from "../plant/apiCalls/addPlant";
import { PlantFormFields } from "../plant/interfaces/formFields";

export const useAddPlantPage = () => {
  const onSubmit = async (plant: PlantFormFields): Promise<void> => {
    await addPlant(
      plant.name,
      plant.description,
      plant.atHomeSince,
      plant.spotId
    );
  };

  return { onSubmit };
};
