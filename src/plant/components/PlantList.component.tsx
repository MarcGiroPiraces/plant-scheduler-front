import { useGetPlants } from "../../hooks/useGetPlants";
import { Plant } from "../Plant.interface";
import { PlantCard } from "./PlantCard.component";
import "./plantList.component.css";

export function PlantList() {
  const { plantsData } = useGetPlants();

  return (
    <ul className="plant-list">
      {plantsData.map((plant: Plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}
