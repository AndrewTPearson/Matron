import { BASEURL } from "./services-config";




// to cover functions:
// create new account (DONE)
// get user key details (DONE)
// get all user details
// add a child
// remove a child
// change a child details
// log in (DONE)

export async function createUser (username: string) {
  const body = JSON.stringify({username: username});
  const result = await fetch(BASEURL + '/createAccount', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: body
  }).catch(function (error) {
    console.log('there was an error:', error);
  });
  const newUser = await result.json();
  // console.log(newUser, 'US');
  // console.log(`Created ${newUser.username} as user #${newUser.ID}`, 'US');
  return newUser;
}
export async function getUserKeyDetails (ID: number) {
  const body = JSON.stringify({ID: ID});
  const result = await fetch(BASEURL + '/miniProfile', {
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    },
    body: body
  }).catch(function (error) {
    console.log('there was an error:', error);
  });
  let userDetails = await result.json();
  // console.log(userDetails);
  return userDetails;
}
  // NB The immediately above function is currently untested
export async function logIn (username: string) {
  // console.log('here, US');
  const body = JSON.stringify({username: username});
  const result = await fetch(BASEURL + '/login', {
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
  const details = await result.json();
  return details;
}
export async function createNewChild (parentID, child) {
  console.log('in User Service', parentID, child);
  const body = JSON.stringify({parentID:parentID, child:child});
  console.log(body, 'body in US');
  const result = await fetch(BASEURL + '/createNewChild', {
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
  const details = await result.json();
  console.log(details, 'in US, returned from server');
  
  return details;
}
export async function modifyChild (parentID, childDetails, childID) {
  
}