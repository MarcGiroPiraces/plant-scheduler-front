import { useGetPlants } from "../../hooks/plant/useGetPlants";
import { useGetIsUserLoggedIn } from "../../hooks/user/useGetIsUserLoggedIn";
import { Plant } from "../../interfaces/plant/Plant.interface";
import { PlantCard } from "./PlantCard.component";
import "./plantList.component.css";

export function PlantList() {
  const { isUserLoggedIn } = useGetIsUserLoggedIn();
  const { plantsData } = useGetPlants(isUserLoggedIn?.id as number);

  return plantsData.length === 0 ? (
    <p>No hi ha plantes registrades</p>
  ) : (
    <ul className="plant-list">
      {plantsData.map((plant: Plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}
