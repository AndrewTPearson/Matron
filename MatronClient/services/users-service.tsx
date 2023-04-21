import { BASEURL } from "./services-config";

// to cover functions:
// create new account
// view mini profile
// view full profile
// add a child
// remove a child
// change a child details
// log in

export async function createUser (username: string) {
  let body = JSON.stringify({username: username});
  let result = await fetch(BASEURL + '/createAccount', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: body
  }).catch(function (error) {
    console.log('there was an error:', error);
  });
  let newUser = await result.json();
  // console.log(newUser, 'US');
  // console.log(`Created ${newUser.username} as user #${newUser.ID}`, 'US');
  return newUser;
}
export async function getUserKeyDetails (ID: number) {
  let body = JSON.stringify({ID: ID});
  let result = await fetch(BASEURL + '/miniProfile', {
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    },
    body: body
  }).catch(function (error) {
    console.log('there was an error:', error);
  });
  let userDetails = await result.json();
  return userDetails;
}
  // NB The immediately above function is currently untested
export async function logIn (username: string) {
  let body = JSON.stringify({username: username});
  let result = await fetch(BASEURL + '/login', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: body
  }).catch(function (error) {
    console.log('there was an error:', error);
  });
  if (result.status === 401) {
    return false;
  }
  let details = await result.json();
  return details;
}