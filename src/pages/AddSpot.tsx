import { SpotForm } from "../components/spot/SpotForm";
import { formatSpots } from "../helperFunctions/spot/formatSpots";
import { useAddSpotPage } from "../hooks/spot/useAddSpotPage";
import { useGetSpots } from "../hooks/spot/useGetSpots";
import "./AddSpot.css";

export function AddSpotPage() {
  const { onSubmit } = useAddSpotPage();
  const { spotsData } = useGetSpots();
  const formattedSpots = formatSpots(spotsData);

  return (
    <>
      <div className="addSpotPage">
        <section className="registeredPlaces">
          <h2>Llocs registrats</h2>
          <ul>
            {formattedSpots.map((spot) => (
              <li className="spot" key={spot.id}>
                <ul>
                  <li className="room">{spot.room}</li>

                  {spot.place.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Afegir lloc</h2>
          <SpotForm actionOnSubmit={onSubmit} />
        </section>
      </div>
    </>
  );
}
