import { useGetPlants } from "../../hooks/plant/useGetPlants";
import { Plant } from "../../interfaces/plant/Plant.interface";
import { PlantCard } from "./PlantCard.component";
import "./plantList.component.css";

export function PlantList() {
  const { plantsData } = useGetPlants();

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
