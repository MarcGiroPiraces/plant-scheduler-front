import { getFormattedDateUE } from "../helperFunctions/formattedDateUE";
import { getAverageWateringDate } from "../helperFunctions/watering/getAverageWateringDate";
import { getNextWateringDate } from "../helperFunctions/watering/getNextWateringDate";
import { Plant } from "../interfaces/plant/Plant.interface";

export const usePlantCard = (plant: Plant) => {
  const isPlantWithWaterings = plant.waterings.length > 0;
  const waterings = isPlantWithWaterings ? plant.waterings : [];
  const lastFiveWaterings = waterings.slice().reverse().slice(0, 5);
  const lastWatering = lastFiveWaterings[0];

  const averageWateringDate = getAverageWateringDate(lastFiveWaterings);

  const nextWateringDate = isPlantWithWaterings
    ? getNextWateringDate(
        lastFiveWaterings[0].date,
        averageWateringDate as number
      )
    : null;

  const closeDate = new Date();
  closeDate.setDate(closeDate.getDate() + 7);

  const isNextWateringDateThisWeek = nextWateringDate
    ? nextWateringDate < closeDate
    : false;

  const lastWateringComponent = isPlantWithWaterings ? (
    <li key={lastWatering.id} className="date">
      {plant.waterings.length > 0 && (
        <p>Ultim reg: {getFormattedDateUE(lastWatering.date)}</p>
      )}
    </li>
  ) : null;

  return {
    lastWateringComponent,
    averageWateringDate,
    nextWateringDate,
    isNextWateringDateThisWeek,
  };
};
