import { Link } from "react-router-dom";
import { usePlantCard } from "../../hooks/usePlantCard";
import { Plant } from "../Plant.interface";
import { getFormattedDateUE } from "../helperFunctions/formattedDateUE";
import "./plantCard.component.css";

export const PlantCard = ({ plant }: { plant: Plant }) => {
  const {
    lastWateringComponent,
    averageWateringDate,
    nextWateringDate,
    isNextWateringDateThisWeek,
  } = usePlantCard(plant);

  return (
    <li
      key={plant.id}
      className={`list-item ${
        isNextWateringDateThisWeek ? "border-pink" : "border-green"
      }`}
    >
      <h2>{plant.name}</h2>
      <p className="spot">
        {plant.spot.room} - {plant.spot.place}
      </p>
      <p>{plant.description}</p>
      <div className="waterings">
        <ul>
          {lastWateringComponent ? (
            lastWateringComponent
          ) : (
            <li>No s'ha registrat cap reg.</li>
          )}
          {
            <li>
              Proper reg:{""}
              {averageWateringDate
                ? getFormattedDateUE(nextWateringDate as Date)
                : "No s'han registrat prous regs com per preveure el proper."}
            </li>
          }
        </ul>
        <div className="link-list">
          <Link to={`/watering/plant/${plant.id}/`}>Afegir reg</Link>
          <Link to={`/transplanting/plant/${plant.id}/`}>
            Afegir transplantament
          </Link>
        </div>
      </div>
    </li>
  );
};
