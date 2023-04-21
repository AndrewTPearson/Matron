import { Carer } from '../types/carer';
import { Parent } from '../types/parent';
import { Session } from '../types/session';
import { User } from "../types/user";

// const users: Parent|Carer[] = [
const users: User[] = [
  {
    ID: 0,
    username: 'Andrew',
    isParent: false,
    isCarer: true,
    futureSessions: []
  },
  {
    ID: 1,
    username: 'thedesolateone',
    isParent: true,
    isCarer: false,
    children: [{
      name: 'Isadora',
      age: 0,
      sex: 'female'
    }],
    openOffers: [],
    pastSessions: [],
    futureSessions: []
  }
];

export function createUserFromUsername (username: string) {
  return {
    ID: users.length,
    username: username,
    isParent: false,
    isCarer: false
  };
}
export function createAccount (user: User) {
  users.push(user);
  console.log('Added new user: ', user)
  return true;
}
export function IDfromUsername (username: string) {
  let index = users.findIndex((user) => {
    return username === user.username;
  });
  return users[index].ID;
}
export function verifyUsername (username: string) {
  let index = users.findIndex((user) => {
    return username === user.username;
  });
  return index !== -1;
}
export function getFullUserDetails (userID: number) {
  let index = users.findIndex((user) => {
    return user.ID === userID;
  });
  return users[index];
}
export function getUserLimitedDetails (userID: number) {
  let index = users.findIndex((user) => {
    return user.ID === userID;
  });
  let user = users[index];
  return {
    ID: user.ID,
    username: user.username,
    isParent: user.isParent,
    isCarer: user.isCarer
  }
}
  // NB The immediately above function is currently untested
export function addParentOpenOffer (offer: Session, parentID: number) {
  // console.log('parentID:', typeof parentID, parentID, 'mockUsersDB');
  let index = users.findIndex((user) => {
    // console.log('userID', typeof user.ID, user.ID);
    return user.ID === +parentID;
  });
  // console.log('index:', index, 'mockUsersDB');
  let user = users[index];
  // console.log(user, 'user in mockUsersDB');
  user.openOffers?.push(offer);
  return true;
}
export function getParentOpenOffers (parentID: number) {
  let user = users.find(user=>user.ID=== +parentID)
  if (user?.openOffers) {return user.openOffers;}
  else
  {return false;}
}
export function getParentConfirmedSessions (parentID: number) {
  let user = users.find(user=>user.ID===parentID)
  if (user?.openOffers) return user.openOffers;
  return false;
}