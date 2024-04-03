import { Spot } from "../spot/Spot.interface";
import { Transplanting } from "../transplanting/Transplanting.interface";
import { User } from "../user/User.interface";
import { Watering } from "../watering/Watering.interface";

export interface Plant {
  id: number;
  name: string;
  description: string;
  atHomeSince: Date;
  createdAt: Date;
  user: User;
  waterings: Watering[];
  transplantings: Transplanting[];
  spot: Spot;
}
