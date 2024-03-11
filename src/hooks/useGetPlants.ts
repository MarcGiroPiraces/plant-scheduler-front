import { useEffect } from "react";
import { getPlants } from "../plant/apiCalls/getPlants";
import { Plant } from "../plant/interfaces/Plant.interface";
import { usePlantsContext } from "./usePlantsContext";

export const useGetPlants = (userId: number) => {
  const { plantsData, setPlantsData } = usePlantsContext();

  useEffect(() => {
    getPlants(`plant/${userId}`).then((data: Plant[] | undefined) =>
      setPlantsData(data as Plant[])
    );
  }, [setPlantsData, userId]);

  return { plantsData };
};
