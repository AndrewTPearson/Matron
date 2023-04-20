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
import { createAccount, createUserFromUsername, getUserLimitedDetails, IDfromUsername, verifyUsername } from '../mockModels/mockUsersDB';

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
    ctx.body = {
      username: newUser.username,
      ID: newUser.ID
    }
  },
  miniProfile: (ctx: any) => {
    console.log(ctx.request.body.ID);
    ctx.status = 200;
    ctx.body = getUserLimitedDetails(ctx.request.body.ID);
  },
  // NB The immediately above function is currently untested
  attemptLogin: (ctx: any) => {
    let name = ctx.request.body.username
    let accepted = verifyUsername(name);
    [ctx.status, ctx.body] = accepted ? [200, getUserLimitedDetails(IDfromUsername(name))]
      : [401, {msg: 'No user found'}];
    if (accepted) console.log('login successful');
  }
}