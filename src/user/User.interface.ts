import { Spot } from "../spot/Spot.interface";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  plants: number[];
  spots: Spot[];
}
