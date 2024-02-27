import { useMemo } from "react";
import { Plant } from "../plant/Plant.interface";
import { getPlantByIdFromPlantsList } from "../plant/helperFunctions/getPlantByIdFromPlantsList";

export const useGetPlantByIdFromPlantsList = (plants: Plant[], id: number) =>
  useMemo(() => getPlantByIdFromPlantsList(plants, id), [plants, id]) as Plant;
