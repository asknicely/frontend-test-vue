# Frontend Test for new engineers
## Introduction
This test is designed to allow you to demonstrate your familiarity with Vue 3 (or other similar SPA framework). It should take you between 2 and 3 hours to complete it. We don’t expect you to spend much more than that and we also don’t expect a pixel perfect work.

*(If you find yourself wasting too much time, focus more on the functionality and less on the layouts).*
## How you will be assessed
- Tasks are completed to the best of your ability
- Code structure and quality
- Code scalability and performance considerations
- Ability to handle API calls
- Ability to create a working feature based on designs
- Suggest any future improvements you would make if you had unlimited time

## The Test
- Use the endpoint (https://o59ee.wiremockapi.cloud/notifications) to load a list of notifications
- Create a scrollable screen (see design below) to display those notifications
- For each notification:
    - Show an avatar icon with initials and a random solid color
    - Show a small dot (left hand-side) to indicate “unread” notifications (OPTIONAL)
- When clicking on a specific notification, check that the action `CREATE TODO` is available under the `available_actions` property of that notification.
    - If this action is available, call the endpoint: https://o59ee.wiremockapi.cloud/notifications/action with the body: `{ "id": ${notification id}, "action": "TODO" }`
    - If the `CREATE TODO` action is not available, call the endpoint https://o59ee.wiremockapi.cloud/notifications/ignore passing the notification ID.
### Screen references (footer is visual only, no need to implement navigation):
| Description | Image |
|-------------|-------|
| Home screen | <img width="403" alt="FrontendTestHome" src="https://github.com/asknicely/frontend-test-vue/assets/133603331/c755497b-e089-4da6-8666-8d9d2ede2694">|
| Scroll demo | <img width="403" alt="FrontendTestGif" src="https://github.com/asknicely/frontend-test-vue/assets/133603331/43228391-9e61-4278-a7c0-b8b51d482048">|


### Color references:
- Background gradient: `#6b097a` to `#274bdb`
- Footer: `#2f384c`
- Name and time labels: `#rgba(255, 255, 255, 0.6)`
- Avatar circle: random colors

**Note**: *We don’t expect a pixel perfect design, but something close to the screenshots above.*
## Bonus
- Include unit or component tests
- Use Typescript
- Show API errors
## Guidelines
### You must
- Have a full functional app that can run locally (i.e.: package.json, scripts to serve localhost, etc)
- Use Vue, React or Angular (our tech stack is Vue)
- Submit in a new Github repository, and link to it in your email.

---
# How to run this project
1. Run `yarn install`
2. Run `yarn dev` to view it locally on "127.0.0.1:5173"
