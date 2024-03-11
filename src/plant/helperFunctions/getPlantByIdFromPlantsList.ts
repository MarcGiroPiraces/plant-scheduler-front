import { Plant } from "../interfaces/Plant.interface";

export const getPlantByIdFromPlantsList = (plants: Plant[], id: number) => {
  return plants.find((plant) => plant.id === id);
};
