import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getFormattedDateUE } from "../../helperFunctions/formattedDateUE";
import { usePlantCard } from "../../hooks/plant/usePlantCard";
import { Plant } from "../../interfaces/plant/Plant.interface";
import "./plantCard.component.css";

export function PlantCard({ plant }: { plant: Plant }) {
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
              Proper reg: {""}
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
          <Link to={`/plant/${plant.id}/`}>
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </div>
      </div>
    </li>
  );
}
