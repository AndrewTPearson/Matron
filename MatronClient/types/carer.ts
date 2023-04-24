import { Session } from "./session";
import { User } from "./user";

export interface Carer extends User {
  futureSessions: Session[]
}