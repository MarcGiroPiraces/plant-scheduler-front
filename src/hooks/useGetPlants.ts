import { useEffect } from "react";
import { getPlants } from "../api/plant/getPlants";
import { Plant } from "../interfaces/plant/Plant.interface";
import { usePlantsContext } from "./usePlantsContext";

export const useGetPlants = (userId: number) => {
  const { plantsData, setPlantsData } = usePlantsContext();

  useEffect(() => {
    if (!userId) return;
    getPlants(`plant/${userId}`).then((data: Plant[] | undefined) =>
      setPlantsData(data as Plant[])
    );
  }, [setPlantsData, userId]);

  return { plantsData };
};
