// Server router. Routes to include (with controller indicated)
//  fullProfile (GET) -> users
//  miniProfile (GET) -> users
//  login (POST) -> users
//  logout (POST) -> users
//  createAccount (POST) -> users
//  createNewChild (POST) -> users
//  removeChild (DELETE) -> users
//  updateChild (POST) -> users

//  getOffers (GET) -> sessions
//  viewUserFutureSessions (GET) -> sessions
//  viewUserPastSessions (GET) -> sessions
//  changeOfferDetails (POST) -> sessions
//  acceptOffer (POST) -> sessions
//  createOffer (POST) -> sessions
//  withdrawFromSession (POST) -> sessions

//  getConversations (GET) -> conversations
//  getConversation (GET) -> conversations
//  sendMessage (POST) -> conversations

import Router from 'koa-router';
import { users } from './controllers/users';

const router = new Router();

router.get('/', async (ctx, next) => {
  console.log('test received');
  ctx.status = 200;
  ctx.body = 'Hello world!';
})
  .get('/miniProfile', users.miniProfile)
  .post('/login', users.attemptLogin)
  .post('/createAccount', users.createAccount);


export default router