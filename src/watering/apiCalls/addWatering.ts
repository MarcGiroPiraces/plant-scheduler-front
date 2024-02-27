import axios from "axios";
import { config } from "../../config";

export const addWatering = async (
  plantId: number,
  fertilizer: boolean,
  date: string
) => {
  const plants = await axios.post(`${config.PATH}watering`, {
    date: new Date(date),
    fertilizer,
    plantId,
  });

  return {
    ...plants.data,
    date: new Date(plants.data.date),
    fertilizer: plants.data.fertilizer,
    plantId: plants.data.plantId,
  };
};
