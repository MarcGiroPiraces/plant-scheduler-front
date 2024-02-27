import { useGetPlants } from "../../hooks/useGetPlants";
import { Plant } from "../Plant.interface";
import { PlantCard } from "./PlantCard.component";

export function PlantList() {
  const { plantsData } = useGetPlants();

  return (
    <ul>
      {plantsData.map((plant: Plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}
