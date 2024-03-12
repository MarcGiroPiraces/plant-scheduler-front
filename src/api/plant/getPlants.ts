import axios from "axios";
import { config } from "../../config";
import { Plant } from "../../interfaces/plant/Plant.interface";

export const getPlants = async (path: string): Promise<Plant[] | undefined> => {
  const authorization = localStorage.getItem("token");
  try {
    const plants = await axios.get(`${config.PATH}${path}`, {
      headers: { Authorization: `Bearer ${authorization}` },
    });

    return plants.data;
  } catch (error) {
    console.error(error);
  }

  return undefined;
};
