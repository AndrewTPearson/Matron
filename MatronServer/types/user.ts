import { Child } from "./child";
import { Session } from "./session";

export interface User {
  ID: number,
  username: string,
  children: Child[],
  openOffers: Session[],
  pastSessions: Session[],
  futureSessions: Session[],
  futureCaring: Session[]
}