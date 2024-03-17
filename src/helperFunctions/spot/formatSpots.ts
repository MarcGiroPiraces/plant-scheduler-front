import { Spot } from "../../interfaces/spot/Spot.interface";

export const formatSpots = (spots: Spot[]) => {
  return spots.reduce(
    (acc, spot) => {
      if (acc.some((accSpot) => accSpot.room === spot.room)) {
        const index = acc.findIndex((accSpot) => accSpot.room === spot.room);
        acc[index].place.push(spot.place);
      } else {
        acc.push({ id: spot.id, room: spot.room, place: [spot.place] });
      }
      return acc;
    },
    [] as Array<{
      id: number;
      room: string;
      place: string[];
    }>
  );
};
