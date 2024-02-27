import { Spot } from "../spot/Spot.interface";
import { Transplanting } from "../tranplanting/Transplanting.interface";
import { Watering } from "../watering/Watering.interface";

export interface Plant {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  user: number;
  waterings: Watering[];
  transplantings: Transplanting[];
  spot: Spot;
}
