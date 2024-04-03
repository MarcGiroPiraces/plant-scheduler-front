import { useEffect } from "react";
import { getPlants } from "../../api/plant/getPlants.api";
import { Plant } from "../../interfaces/plant/Plant.interface";
import { usePlantsContext } from "./usePlantsContext";

export const useGetPlants = () => {
  const { plantsData, setPlantsData } = usePlantsContext();
  console.log(plantsData);

  useEffect(() => {
    console.log("useGetPlants");
    getPlants(`plant`).then((data: Plant[]) => setPlantsData(data as Plant[]));
  }, [setPlantsData]);

  return { plantsData };
};
