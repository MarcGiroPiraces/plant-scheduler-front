import axios from "axios";
import { config } from "../../config";

export const editPlant = async (
  id: number,
  name: string,
  description: string,
  atHomeSince: Date,
  spotId: number
): Promise<number> => {
  const authorization = localStorage.getItem("token");
  const updatedPlantId = (await axios.patch(
    `${config.PATH}plant/${id}`,
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

  return updatedPlantId;
};
