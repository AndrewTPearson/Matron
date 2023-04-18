# Matron
A matching app linking parents with babysitters and childminders

# Core goals
* Primarily targeted towards smartphone users
* Written entirely in TypeScript
* Simple, low-security login system
* Users can register as parents, carers, or both
* Parents and carers can make, accept, and withdraw from offers. Offers from parents make clear the age and sex of children to be looked after
* Offers can be filtered based on time, distance, price, review score of carer and parents, withdrawal rate
* All members have profile pages displaying key information about them
* Following a childcare session, both parties can leave a review of the other party and may mark the other party as a “favourite”, giving preferential access to future contracts, or alternatively blacklist them
* Checks to prevent creation of multiple accounts
* In-app messaging between accounts

# High-priority stretch goals
* Works on desktop web
* Parents can request updates from carers (either ‘standard update’ with a 15 minute timer, or ‘urgent update’ which requires confirmation to send and requests a video call)
* Makes use of built-in cameras for (1) verification of carers, (2) providing live updates to parents on request
* Push notifications for (1) offers of interest; (2) parents requesting live updates
* Look into possibility of linking accounts to DBS checks

# Low-priority stretch goals
* Improve security around authentication
* Link to Stripe payments
* Ability to set up alert for offers matching characteristics
* Deployment online
* Algorithm to suggest fees

# Proposed tech stack
Front end:
* React Native
* Tailwind

Back end:
* Koa
* Graph database (platform TBC - looking at Amazon Neptune, ArangoDB, Neo4j, TypeDB)
