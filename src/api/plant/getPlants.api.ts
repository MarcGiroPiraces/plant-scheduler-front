import axios from "axios";
import { config } from "../../config";
import { Plant } from "../../interfaces/plant/Plant.interface";

export const getPlants = async (path: string): Promise<Plant[]> => {
  const authorization = localStorage.getItem("token");
  if (!authorization) throw new Error("No token found");
  try {
    const { data } = (await axios.get(`${config.PATH}${path}`, {
      headers: { Authorization: `Bearer ${authorization}` },
    })) as { data: Plant[] };

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching plants");
  }
};
