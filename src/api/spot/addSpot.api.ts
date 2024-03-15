import axios from "axios";
import { config } from "../../config";

export const addSpot = async (room: string, place: string) => {
  const authorization = localStorage.getItem("token");
  const spotId = (await axios.post(
    `${config.PATH}spot`,
    {
      room,
      place,
    },
    {
      headers: { Authorization: `Bearer ${authorization}` },
    }
  )) as number;

  return spotId;
};
