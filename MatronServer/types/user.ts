import { Child } from "./child";
import { Session } from "./session";

export interface User {
  ID: number,
  username: string,
  isParent: boolean,
  isCarer: boolean,
  children?: Child[],
  openOffers?: Session[],
  pastSessions?: Session[],
  futureSessions?: Session[]
}