import axios from "axios";
import { config } from "../../config";

export const getPlantTransplantings = async (plantId: string) => {
  const plants = await axios.get(`${config.PATH}transplanting/${plantId}`);

  return {
    ...plants.data,
  };
};
