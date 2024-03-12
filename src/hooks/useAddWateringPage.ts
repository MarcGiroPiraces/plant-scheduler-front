import { addWatering } from "../api/watering/addWatering";
import { WateringFormFields } from "../interfaces/watering/formFields";

export const useAddWateringPage = () => {
  const onSubmit = async (watering: WateringFormFields): Promise<void> => {
    await addWatering(watering.plantId, watering.fertilizer, watering.date);
  };

  return { onSubmit };
};
