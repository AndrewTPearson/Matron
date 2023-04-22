// Server router. Routes to include (with controller indicated)
//  fullProfile (GET) -> users (CAN THIS BE COMBINED WITH BELOW?)
//  miniProfile (GET) -> users (DONE)
//  login (POST) -> users (DONE)
//  logout (POST) -> users (DONE)
//  createAccount (POST) -> users (DONE)
//  createNewChild (POST) -> users 
//  removeChild (DELETE) -> users
//  updateChild (POST) -> users

//  getAllOffers (GET) -> sessions (DONE)
//  viewUserFutureSessions (GET) -> sessions
//  viewUserPastSessions (GET) -> sessions
//  viewUserOffers (POST) -> sessions (DONE FOR PARENTS, NOT FOR CARERS)
// NB should probably be a get with the id in the params
//  changeOfferDetails (POST) -> sessions
//  acceptOffer (POST) -> sessions
//  createParentOffer (POST) -> sessions (DONE)
//  createCarerOffer (POST) -> sessions
//  withdrawFromSession (POST) -> sessions

//  getConversations (GET) -> conversations
//  getConversation (GET) -> conversations
//  sendMessage (POST) -> conversations

import Router from 'koa-router';
import { users } from './controllers/users';
import { sessions } from './controllers/sessions';

const router = new Router();

router.get('/', async (ctx, next) => {
  console.log('test received');
  ctx.status = 200;
  ctx.body = 'Hello world!';
})
  .get('/miniProfile', users.miniProfile)
  // tested
  .post('/login', users.attemptLogin)
  // tested
  .post('/createAccount', users.createAccount)
  // tested

  .get('/getAllOffers', sessions.getAllOffersFromParents)
  // tested
  .post('/viewUserOffers', sessions.getParentOffers)
  // tested
  .post('/createParentOffer', sessions.createParentOffer)
  // tested
  .post('/viewUserFutureSessions', sessions.getUserFutureSessions);
  // probably working?



export default router