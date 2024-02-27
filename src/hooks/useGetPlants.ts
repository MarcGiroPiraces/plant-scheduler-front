import { useEffect } from "react";
import { Plant } from "../plant/Plant.interface";
import { getPlants } from "../plant/apiCalls/getPlants";
import { usePlantsContext } from "./usePlantsContext";

export const useGetPlants = () => {
  const { plantsData, setPlantsData } = usePlantsContext();

  useEffect(() => {
    getPlants("plant").then((data: Plant[] | undefined) =>
      setPlantsData(data as Plant[])
    );
  }, [setPlantsData]);

  return { plantsData };
};
