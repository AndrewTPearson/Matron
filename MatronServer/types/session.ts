import { Parent } from "./parent";
import { Carer } from './carer';
import { Child } from "./child";
import { User } from './user';

export interface Session {
  sessionID: number,
  location: string,
  startTime: Date,
  endTime: Date,
  parent: Parent | null,
  carer: User | null,
  children: Child[],
  carerOptions?: Carer[],
  parentOptions?: Parent[]
}
export interface incomingOffer {
  location: string,
  startTime: Date,
  endTime: Date,
  parent: Parent | null,
  carer: Carer | null,
  children: Child[],
  carerOptions?: Carer[],
  parentOptions?: Parent[]
}
