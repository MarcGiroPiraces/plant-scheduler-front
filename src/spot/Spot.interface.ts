import { Plant } from "../plant/interfaces/Plant.interface";
import { User } from "../user/User.interface";

export const roomOptions = {
  terrassa: "Terrassa",
  tenjador: "Menjador",
  despatxBoleti: "Bedroom",
  despatxMarquitus: "Bathroom",
  dormitori: "Dormitori",
} as const;

export type Room = (typeof roomOptions)[keyof typeof roomOptions];

export interface Spot {
  id: number;
  room: Room;
  place: string;
  plants: Plant[];
  user: User;
}
