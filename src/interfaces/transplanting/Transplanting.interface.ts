import { Plant } from "../plant/Plant.interface";

export interface Transplanting {
  id: number;
  date: Date;
  plant: Plant;
  potUpsize: boolean;
  soilChange: boolean;
  soilMix: string;
}
