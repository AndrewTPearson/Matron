// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Carer } from '../types/carer';
import { Child, IncomingNewChild } from '../types/child';
import { Parent } from '../types/parent';
import { Session } from '../types/session';
import { User } from "../types/user";

// const users: Parent|Carer[] = [
const users: User[] = [
  {
    ID: 0,
    username: 'Andrew',
    openOffers: [],
    pastSessions: [],
    futureSessions: [],
    futureCaring: [],
    children: []
  },
  {
    ID: 1,
    username: 'thedesolateone',
    children: [{
      name: 'Isa',
      age: 0,
      sex: 'female',
      childID: 0
    }],
    openOffers: [],
    pastSessions: [],
    futureCaring: [],
    futureSessions: []
  },
  {
    ID: 2,
    username: 'Ayo',
    children: [{
      name: 'Fu',
      age: 15,
      sex: 'female',
      childID: 0
    }, {
      name: 'Da',
      age: 13,
      sex: 'male',
      childID: 1
    },{
      name: 'Te',
      age: 8,
      sex: 'female',
      childID: 2
    },{
      name: 'To',
      age: 6,
      sex: 'female',
      childID: 3
    }  
  ],
    openOffers: [],
    pastSessions: [],
    futureCaring: [],
    futureSessions: []
  }
];

export function createUserFromUsername (username: string) {
  return {
    ID: users.length,
    username: username,
    openOffers: [],
    pastSessions: [],
    futureCaring: [],
    futureSessions: [],
    children: []
  };
}
export function createAccount (user: User) {
  users.push(user);
  console.log('Added new user: ', user)
  return true;
}
export function IDfromUsername (username: string) {
  // console.log(username, 'username in DB');
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
    isCarer: user.isCarer,
    children: user.children
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
  let user = users.find((user)=>{return user.ID===parentID});
  if (user?.openOffers) {return user.openOffers;}
  else
  {return false;}
}
export function getParentConfirmedSessions (parentID: number) {
  let user = users.find(user=>user.ID==parentID)
  if (user?.futureSessions) return user.futureSessions;
  return false;
}
export function addNewChild (parentID: number, child: IncomingNewChild) {
  const newChild = {...child};
  newChild.childID = users[parentID].children?.length;
  users[parentID].children?.push(newChild);
  return newChild;
}
export function updateSessionWithCarer (parentID: number, sessionID: number, carer: User) {
  const parent = users.find((user) => {return user.ID === parentID});
  // console.log(users, 'here3');
  const sessionIndex = parent?.openOffers?.findIndex((session)=>session.sessionID === sessionID);
  // parent?.openOffers[sessionIndex].carer = carer;
  if (parent?.openOffers[sessionIndex]) {
    // console.log('found session in DB');
    parent.openOffers[sessionIndex].carer = carer;
  }
  parent?.futureSessions?.push(parent.openOffers.splice(sessionIndex, 1)[0]);
  // console.log(parent, 'parent in DB');
  return true;
}
export function modifyChild (parentID: number, child: Child) {
//   // Look for
//   if (child.childID && parentID && users[parentID]) {
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     if (users[parentID].children && users[parentID].children[child.childID]) {
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//       users[parentID].children[child.childID] = child;
//     }
//     // if (users.length > 0 && users[parentID].children && users[parentID].children.length > 0) {
//     //   if (users[parentID].children) {

//     //   }
//     // }
//   }
//   return true;
}
// The above function caused problems which Kostas and I were unable to solve after half an hour and
// numerous console.log()s, so have deprioritised giving users the ability to change
// their existing children