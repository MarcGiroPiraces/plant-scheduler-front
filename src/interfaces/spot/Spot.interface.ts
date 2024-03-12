import { Plant } from "../plant/Plant.interface";
import { User } from "../user/User.interface";

export interface Spot {
  id: number;
  room: string;
  place: string;
  plants: Plant[];
  user: User;
}
