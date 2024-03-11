import { useMemo } from "react";
import { getPlantByIdFromPlantsList } from "../plant/helperFunctions/getPlantByIdFromPlantsList";
import { Plant } from "../plant/interfaces/Plant.interface";

export const useGetPlantByIdFromPlantsList = (plants: Plant[], id: number) =>
  useMemo(() => getPlantByIdFromPlantsList(plants, id), [plants, id]) as Plant;
