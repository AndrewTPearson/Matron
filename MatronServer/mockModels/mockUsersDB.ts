import { User } from "../types/user";

const users: User[] = [];

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
  return true;
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
    username: user.username
  }
}