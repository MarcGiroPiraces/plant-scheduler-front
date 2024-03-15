import axios from "axios";
import { config } from "../../config";

export const addTransplanting = async (
  plantId: number,
  potUpsize: boolean,
  soilChange: boolean,
  soilMix: string,
  date: string
): Promise<number> => {
  const authorization = localStorage.getItem("token");
  const newTransplantingId = (await axios.post(
    `${config.PATH}transplanting`,
    {
      date: date ? new Date(date) : new Date(),
      potUpsize,
      soilChange,
      soilMix,
      plantId,
    },
    {
      headers: { Authorization: `Bearer ${authorization}` },
    }
  )) as number;

  return newTransplantingId;
};
