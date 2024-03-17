import axios from "axios";
import { config } from "../../config";

export const addPlant = async (
  name: string,
  description: string,
  atHomeSince: string,
  spotId: number
): Promise<number> => {
  const authorization = localStorage.getItem("token");
  console.log(name, description, atHomeSince, spotId, authorization);
  const newPlantId = (await axios.post(
    `${config.PATH}plant`,
    {
      name,
      description,
      atHomeSince,
      spotId,
    },
    {
      headers: { Authorization: `Bearer ${authorization}` },
    }
  )) as number;

  return newPlantId;
};
