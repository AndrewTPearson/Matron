// Controllers to handle the following operations:
// attempt to create a new account
// view a users' full profile
// view a users' mini profile
// add a child
// remove a child
// change a child's details
// attempt login

// Following operations to be added later if required
// log out

import Koa from 'koa';
import { createAccount, createUserFromUsername, verifyUsername } from '../mockModels/mockUsersDB';

export const users = {
  // login: () => {
  // login: (ctx, next) => {
  // login: (ctx: Koa.ctx, next: Function) => {
  login: (ctx: any, next: Function) => {
    if (verifyUsername(ctx.request.body.username)) {
      ctx.status = 200;
      ctx.body = 'Logged in';
    } else {
      ctx.status = 401;
      ctx.body = 'Not authorised';
    }
  },
  createAccount: (ctx: any) => {
    let newUser = createUserFromUsername(ctx.request.body.username);
    createAccount(newUser);
    ctx.status = 201;
    ctx.body = 'Account created!';
  }
}