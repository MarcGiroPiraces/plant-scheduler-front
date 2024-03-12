import axios from "axios";
import { config } from "../../config";

export const addPlant = async (
  name: string,
  description: string,
  atHomeSince: string,
  spotId: number
): Promise<number> => {
  const newPlantId = (await axios.post(`${config.PATH}plant`, {
    name,
    description,
    atHomeSince,
    spotId,
  })) as number;

  return newPlantId;
};
