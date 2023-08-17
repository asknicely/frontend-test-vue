# Frontend Test for new engineers
## Purpose
This test is designed to allow the candidate to demonstrate their familiarity with Vue 3 (or other similar SPA frameworks), full-stack capability and problem-solving skills.
## How you will be assessed
- Tasks are completed to the best of your ability
- Code structure and quality
- Code scalability and performance considerations
- Clear instructions on how to run the application
- Suggest any future improvements you would make if you had unlimited time

## The Test
- Make a screen that will:
    - Call the endpoint (https://o59ee.wiremockapi.cloud/notifications)
    - List notifications from API response (should be able to scroll)
    - Show a small dot (left hand-side) to indicate “unread” notifications
    - Show an avatar icon with initials and a random solid color
- Upon clicking on a specific notification:
    - Load a details screen with the full notification text
    - Allow user to go back to main list view
    - Show footer buttons according to the `available_actions` field returned in the API
    - Buttons should make a POST the following endpoints when clicked (make sure to handle the HTTP responses accordingly):
        - IGNORE: Call endpoint https://o59ee.wiremockapi.cloud/notifications/ignore passing body: `{ "id": ${notification id} }`
        - CREATE ACTION: Call endpoint https://o59ee.wiremockapi.cloud/notifications/action passing body: `{ "id": ${notification id}, "action": "TODO" }`
        - DELETE: Call endpoint https://o59ee.wiremockapi.cloud/notifications/delete passing body: `{ "id": ${notification id} }`
### Screen references:
| Description | Image |
|-------------|-------|
| Home screen | <img width="403" alt="FrontendTestHome" src="https://github.com/asknicely/frontend-test-vue/assets/133603331/c755497b-e089-4da6-8666-8d9d2ede2694">|
| Scroll demo | <img width="403" alt="FrontendTestGif" src="https://github.com/asknicely/frontend-test-vue/assets/133603331/43228391-9e61-4278-a7c0-b8b51d482048">|
| Details screen |<img width="403" alt="FrontendTestDetails" src="https://github.com/asknicely/frontend-test-vue/assets/133603331/ffff13c8-77af-4618-90ab-8b15d7bd2f6d">|


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
- Use Vue, React or Angular (we use Vue at AskNicely)
- Submit in a new Github repository, and link to it in your email.

### You may
- Use a framework like NextJS or Nuxt

---
# How to run this project
1. Run `yarn install`
2. Run `yarn dev` to view it locally on "127.0.0.1:5173"
