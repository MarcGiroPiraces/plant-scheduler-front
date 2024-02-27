import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Plant } from "../plant/Plant.interface";

interface PlantsContextProps {
  plantsData: Plant[];
  setPlantsData: Dispatch<SetStateAction<Plant[]>>;
}

export const PlantsContext = createContext<PlantsContextProps | null>(null);

export function PlantsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plantsData, setPlantsData] = useState<Plant[]>([]);

  return (
    <PlantsContext.Provider value={{ plantsData, setPlantsData }}>
      {children}
    </PlantsContext.Provider>
  );
}
