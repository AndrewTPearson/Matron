// Controllers to handle the following operations:
// create an offer
// indicate agreement to an offered session
// confirm agreement to a session
// withdraw from a session
// change the details of an offer
// view existing offers
// view a user's future sessions and offers
// view a user's past sessions

import { createOfferFromParent, getAllOpenOffers } from "../mockModels/mockSessionsDB";
import { addParentOpenOffer, getParentConfirmedSessions, getParentOpenOffers } from "../mockModels/mockUsersDB";
import { Session } from "../types/session";

export const sessions = {
  createParentOffer: async (ctx: any, next: Function) => {
    // console.log('in controller, sessions.ts')
    let newOffer:Session = await createOfferFromParent(ctx.request.body);
    // console.log('still in controller, sessions.ts');
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
    // console.log('in server, sessions.ts')
    let offers = getAllOpenOffers();
    // console.log(offers, 'sessions.ts');
    ctx.status = 200;
    ctx.body = offers;
  },
  getUserFutureSessions: async (ctx: any, next: Function) => {
    let parentID = ctx.request.body.ID;
    let sessions = getParentConfirmedSessions(parentID);
    ctx.status = 200;
    ctx.body = sessions;
  }
}
