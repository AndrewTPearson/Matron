import { User } from "./user";
import { Child } from "./child";

export interface Parent extends User {
  children: Child[]
}