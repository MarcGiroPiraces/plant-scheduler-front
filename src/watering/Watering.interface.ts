import { Plant } from "../plant/interfaces/Plant.interface";

export interface Watering {
  id: number;
  date: Date;
  fertilizer: boolean;
  plant: Plant;
}
