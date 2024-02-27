import { Watering } from "../../watering/Watering.interface";

export const getAverageWateringDate = (lastFiveWaterings: Watering[]) => {
  if (lastFiveWaterings.length < 2) return false;

  const firstWateringDate = new Date(lastFiveWaterings[0].date).getTime();
  const lastWateringDate = new Date(
    lastFiveWaterings[lastFiveWaterings.length - 1].date
  ).getTime();

  const timeGap = Math.abs(lastWateringDate - firstWateringDate);
  const daysGap = Math.ceil(timeGap / (1000 * 60 * 60 * 24));

  return daysGap / (lastFiveWaterings.length - 1);
};
