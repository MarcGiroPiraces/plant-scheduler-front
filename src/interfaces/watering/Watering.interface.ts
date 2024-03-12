import { Plant } from "../plant/Plant.interface";

export interface Watering {
  id: number;
  date: Date;
  fertilizer: boolean;
  plant: Plant;
}
