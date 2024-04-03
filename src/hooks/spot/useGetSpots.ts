import { useEffect, useState } from "react";
import { getSpots } from "../../api/spot/getSpots.api";
import { Spot } from "../../interfaces/spot/Spot.interface";
import { useGetUserData } from "../user/useGetUserData";

export const useGetSpots = () => {
  const { userData } = useGetUserData();
  const [spotsData, setSpotsData] = useState<Spot[]>([]);

  useEffect(() => {
    if (userData?.isUserLoggedIn === false) return;
    getSpots().then((data: Spot[]) => setSpotsData(data as Spot[]));
  }, [setSpotsData, userData]);

  return { spotsData };
};
