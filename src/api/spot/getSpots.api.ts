import axios from "axios";
import { config } from "../../config";
import { Spot } from "../../interfaces/spot/Spot.interface";

export const getSpots = async () => {
  const authorization = localStorage.getItem("token");
  const { data } = (await axios.get(`${config.PATH}spot`, {
    headers: { Authorization: `Bearer ${authorization}` },
  })) as { data: Spot[] };

  return data;
};
