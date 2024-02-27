import { useContext } from "react";
import { PlantsContext } from "../providers/plantsProvider";

export const usePlantsContext = () => {
  const context = useContext(PlantsContext);
  if (!context) {
    throw new Error("usePlantsContext must be used within a PlantsProvider");
  }

  return context;
};
