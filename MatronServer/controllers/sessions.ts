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
    // console.log('in controller, sessions.ts', ctx.request.body);
    if (!ctx.request.body.parent) {
      ctx.status = 400;
      ctx.body = 'failed';
    }
    
    let newOffer:Session = await createOfferFromParent(ctx.request.body);
    // console.log('still in controller, sessions.ts');
    await addParentOpenOffer(newOffer, ctx.request.body.ID);
    ctx.status = 201;
    ctx.body = newOffer;
  },
  getParentOffers: async (ctx: any, next: Function) => {
    let parentID = ctx.request.body.ID;
    let offers = getParentOpenOffers(parentID);
    // console.log(offers, 'in controller');
    ctx.status = 200;
    ctx.body = offers;
  },
  getAllOffersFromParents: async (ctx: any, next: Function) => {
    // console.log('in server, sessions.ts')
    let offers = getAllOpenOffers();
    // console.log(offers, 'sessions.ts');
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
    // console.log(ctx.request.body, 'ctx in controller');
    let [carer, sessionID, parent] = [ctx.request.body.carer, ctx.request.body.sessionID, ctx.request.body.parent];
    let parentID = IDfromUsername(parent);
    // console.log('parentID:', parentID);
    updateSessionWithCarer(parentID, sessionID, carer);
    let updatedSession = addCarer(sessionID, carer);
    ctx.status = 200;
    ctx.body = updatedSession;
  }
}
