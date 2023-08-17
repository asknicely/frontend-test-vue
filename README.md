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
![FrontendTestHome.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd7f1eef-baa4-4045-96ee-75433724a915/FrontendTestHome.png)

![FrontendTestGif.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/efa312d1-a5c5-43b8-9799-15e615d45518/FrontendTestGif.gif)

![FrontendTestDetails.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ba85fab-078b-4b3e-a5de-6949735d29d7/FrontendTestDetails.png)

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