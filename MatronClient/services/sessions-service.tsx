import { BASEURL } from "./services-config";

// to cover functions:
// create a session offer
// view all session offers from a particular user
// view all open session offers
// respond to a session offer
// confirm you are happy with a counteroffer

export async function createSessionFromParent(sessionDetails) {
  const body = JSON.stringify(sessionDetails);
  const result = await fetch(BASEURL + '/createParentOffer', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: body
  }).catch(function (error) {
    console.log('there was an error:', error);
  });
  const newSession = await result.json();
  return newSession;
}
export async function getAllOpenOffers() {
  const result = await fetch(BASEURL + '/getAllOffers')
    .catch(function (error) {
      console.log('there was an error:', error);
    });
  const openOffers = await result.json();
  return openOffers;
}
export async function getParentOffers(parentID) {
  const result = await fetch(BASEURL + '/viewUserOffers', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ ID: parentID })
  })
    .catch(function (error) {
      console.log('there was an error:', error);
    });
  const openOffers = await result.json();
  return openOffers;
}
export async function getParentConfirmed(parentID) {
  const result = await fetch(BASEURL + '/viewUserFutureSessions', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ ID: parentID })
  })
    .catch(function (error) {
      console.log('there was an error:', error);
    });
  const confirmedSessions = await result.json();
  console.log(confirmedSessions, 'SS');
  return confirmedSessions;
}
export async function volunteerAsCarer(carer, sessionID, parent) {
  console.log(parent, 'in SessionsService, parentID')
  const result = await fetch(BASEURL + '/volunteer', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ carer: carer, sessionID: sessionID, parent: parent })
  }).catch(function (error) {
    console.log('there was an error:', error);
  });
  const response = await result.json();
  console.log(response);
  return response;
}