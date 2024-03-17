import { useEffect, useState } from "react";
import { getSpots } from "../../api/spot/getSpots.api";
import { Spot } from "../../interfaces/spot/Spot.interface";

export const useGetSpots = () => {
  const [spotsData, setSpotsData] = useState<Spot[]>([]);

  useEffect(() => {
    getSpots().then((data: Spot[]) => setSpotsData(data as Spot[]));
  }, [setSpotsData]);

  return { spotsData };
};
