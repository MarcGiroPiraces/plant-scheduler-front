import axios from "axios";
import { config } from "../../config";
import { Plant } from "../interfaces/Plant.interface";

export const getPlantById = async (id: string): Promise<Plant> => {
  const plants = await axios.get(`${config.PATH}plant/${id}`);
  return plants.data;
};
