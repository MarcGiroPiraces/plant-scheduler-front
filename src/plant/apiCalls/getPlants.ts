import axios from "axios";
import { config } from "../../config";
import { Plant } from "../Plant.interface";

export const getPlants = async (path: string): Promise<Plant[] | undefined> => {
  try {
    const plants = await axios.get(`${config.PATH}${path}`);

    return plants.data;
  } catch (error) {
    console.error(error);
  }

  return undefined;
};
