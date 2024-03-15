import axios from "axios";
import { config } from "../../config";

export const addWatering = async (
  plantId: number,
  fertilizer: boolean,
  date: string
) => {
  const authorization = localStorage.getItem("token");
  const plants = await axios.post(
    `${config.PATH}watering`,
    {
      date: new Date(date),
      fertilizer,
      plantId,
    },
    {
      headers: { Authorization: `Bearer ${authorization}` },
    }
  );

  return {
    ...plants.data,
    date: new Date(plants.data.date),
    fertilizer: plants.data.fertilizer,
    plantId: plants.data.plantId,
  };
};
