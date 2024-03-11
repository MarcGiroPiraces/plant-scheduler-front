import { Plant } from "../../plant/interfaces/Plant.interface";

export interface Transplanting {
  id: number;
  date: Date;
  plant: Plant;
  potUpsize: boolean;
  soilChange: boolean;
  soilMix: string;
}
