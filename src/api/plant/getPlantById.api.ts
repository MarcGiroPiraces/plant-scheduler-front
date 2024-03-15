import axios from "axios";
import { config } from "../../config";
import { Plant } from "../../interfaces/plant/Plant.interface";

export const getPlantById = async (id: string): Promise<Plant> => {
  const authorization = localStorage.getItem("token");
  const plants = await axios.get(`${config.PATH}plant/${id}`, {
    headers: { Authorization: `Bearer ${authorization}` },
  });

  return plants.data;
};
