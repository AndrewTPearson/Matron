// Controllers to handle the following operations:
// create an offer
// indicate agreement to an offered session
// confirm agreement to a session
// withdraw from a session
// change the details of an offer
// view existing offers
// view a user's future sessions and offers
// view a user's past sessions

import { addCarer, createOfferFromParent, getAllOpenOffers } from "../mockModels/mockSessionsDB";
import { addParentOpenOffer, getParentConfirmedSessions, getParentOpenOffers, IDfromUsername, updateSessionWithCarer } from "../mockModels/mockUsersDB";
import { Session } from "../types/session";

export const sessions = {
  createParentOffer: async (ctx: any, next: Function) => {
    if (!ctx.request.body.parent) {
      ctx.status = 400;
      ctx.body = 'failed';
    }

    let newOffer: Session = await createOfferFromParent(ctx.request.body);
    await addParentOpenOffer(newOffer, ctx.request.body.ID);
    ctx.status = 201;
    ctx.body = newOffer;
  },
  getParentOffers: async (ctx: any, next: Function) => {
    let parentID = ctx.request.body.ID;
    let offers = getParentOpenOffers(parentID);
    ctx.status = 200;
    ctx.body = offers;
  },
  getAllOffersFromParents: async (ctx: any, next: Function) => {
    let offers = getAllOpenOffers();
    ctx.status = 200;
    ctx.body = offers;
  },
  getUserFutureSessions: async (ctx: any, next: Function) => {
    let parentID = ctx.request.body.ID;
    let sessions = getParentConfirmedSessions(parentID);
    console.log(sessions, 'sessions in controller');
    ctx.status = 200;
    ctx.body = sessions;
  },
  volunteer: async (ctx: any, next: Function) => {
    let [carer, sessionID, parent] = [ctx.request.body.carer, ctx.request.body.sessionID, ctx.request.body.parent];
    let parentID = IDfromUsername(parent);
    updateSessionWithCarer(parentID, sessionID, carer);
    let updatedSession = addCarer(sessionID, carer);
    ctx.status = 200;
    ctx.body = updatedSession;
  }
}
