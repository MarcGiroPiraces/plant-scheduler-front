import { Plant } from "../../plant/Plant.interface";
import { Transplanting } from "../Transplanting.interface";

export const getLatestTransplantingFromPlant = (
  plant: Plant
): Transplanting | undefined => {
  const transplantings = plant?.transplantings;
  const latestTransplanting = transplantings?.reduce((latest, current) => {
    if (latest.date < current.date) {
      return current;
    }
    return latest;
  }, transplantings[0]);

  return latestTransplanting;
};