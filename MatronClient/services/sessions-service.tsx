import { BASEURL } from "./services-config";

// to cover functions:
// create a session offer
// view all session offers from a particular user
// view all open session offers
// respond to a session offer
// confirm you are happy with a counteroffer

export async function createSessionFromParent (sessionDetails) {
  let body = JSON.stringify({
    parent: sessionDetails.username,
    ID: sessionDetails.username,
    location: sessionDetails.location,
    startTime: sessionDetails.startTime,
    endTime: sessionDetails.endTime,
    carer: null,
    children: sessionDetails.children,
    carerOptions: []
  })
  let result = await fetch(BASEURL + '/createParentOffer', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: body
  }).catch(function (error) {
    console.log('there was an error:', error);
  });
  let newSession = await result.json();
  console.log(newSession, 'SS');
}