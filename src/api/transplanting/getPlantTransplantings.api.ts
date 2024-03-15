import axios from "axios";
import { config } from "../../config";

export const getPlantTransplantings = async (plantId: string) => {
  const authorization = localStorage.getItem("token");
  const plants = await axios.get(`${config.PATH}transplanting/${plantId}`, {
    headers: { Authorization: `Bearer ${authorization}` },
  });

  return {
    ...plants.data,
  };
};
