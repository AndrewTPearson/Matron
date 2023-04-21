import { incomingOffer, Session } from "../types/session";

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
  console.log(newOffer);
  return newOffer;
}