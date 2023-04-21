import { User } from "./user";
import { Child } from "./child";
import { Session } from "./session";

export interface Parent extends User {
  children: Child[],
  openOffers: Session[],
  pastSessions: Session[],
  futureSessions: Session[]
}