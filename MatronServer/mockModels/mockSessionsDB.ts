import { incomingOffer, Session } from "../types/session";
import { User } from "../types/user";

const sessions : {
  offersFromParents: Session[],
  agreedSessions: Session[],
  archivedSessions: Session[],
} = {
  offersFromParents: [],
  agreedSessions: [],
  archivedSessions: []
}

export function createOfferFromParent (offer: incomingOffer) {
  // console.log(offer, 'in DB');
  const newOffer = {
    sessionID: sessions.offersFromParents.length +
      sessions.agreedSessions.length +
      sessions.archivedSessions.length,
    location: offer.location,
    startTime: offer.startTime,
    endTime: offer.endTime,
    parent: offer.parent,
    carer: null,
    children: offer.children,
    carerOptions: []
  };
  sessions.offersFromParents.push(newOffer);
  // console.log(newOffer, 'in DB');
  return newOffer;
}
export function getAllOpenOffers () {
  return sessions.offersFromParents;
}
export function addCarer (sessionID: Number, carer: User) {
  let sessionIndex = sessions.offersFromParents.findIndex((session)=>session.sessionID === sessionID);
  sessions.offersFromParents[sessionIndex].carer = carer;
  sessions.agreedSessions.push(sessions.offersFromParents.splice(sessionIndex, 1)[0]);
  // console.log('changing session in DB', sessions.agreedSessions[sessions.agreedSessions.length - 1]);
  return sessions.agreedSessions[-1];
}