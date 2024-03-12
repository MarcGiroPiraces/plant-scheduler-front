import axios from "axios";
import { config } from "../../config";

export const addTransplanting = async (
  plantId: number,
  potUpsize: boolean,
  soilChange: boolean,
  soilMix: string,
  date: string
): Promise<number> => {
  const newTransplantingId = (await axios.post(`${config.PATH}transplanting`, {
    date: date ? new Date(date) : new Date(),
    potUpsize,
    soilChange,
    soilMix,
    plantId,
  })) as number;

  return newTransplantingId;
};
