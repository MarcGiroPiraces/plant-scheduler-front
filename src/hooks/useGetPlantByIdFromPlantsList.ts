import { useMemo } from "react";
import { getPlantByIdFromPlantsList } from "../helperFunctions/plant/getPlantByIdFromPlantsList";
import { Plant } from "../interfaces/plant/Plant.interface";

export const useGetPlantByIdFromPlantsList = (plants: Plant[], id: number) =>
  useMemo(() => getPlantByIdFromPlantsList(plants, id), [plants, id]) as Plant;
