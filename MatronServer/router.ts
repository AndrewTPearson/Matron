// Server router. Routes to include (with controller indicated)
//  fullProfile (GET) -> users
//  miniProfile (GET) -> users
//  login (POST) -> users
//  logout (POST) -> users
//  createAccount (POST) -> users
//  createNewChild (POST) -> users
//  removeChild (DELETE) -> users
//  updateChild (POST) -> users

//  getAllOffers (GET) -> sessions
//  viewUserFutureSessions (GET) -> sessions
//  viewUserPastSessions (GET) -> sessions
//  viewUserOffers (POST) -> sessions
// NB should probably be a get with the id in the params
//  changeOfferDetails (POST) -> sessions
//  acceptOffer (POST) -> sessions
//  createOffer (POST) -> sessions
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
  .post('/login', users.attemptLogin)
  .post('/createAccount', users.createAccount)

  .post('/viewUserOffers', sessions.getParentOffers)
  .post('/createParentOffer', sessions.createParentOffer);



export default router