## Bidscale Alert Display

### Challenge Entry by Magsud Aliyev

#### Summary:

This repo contains the completed Bidscale challenge. The app now includes the ability to deploy timed alerts that appear in the top right corner. The data is retrieved and sent to DynamoDB for persistence.

App is accessible through this [URL](https://main.durb9giserfuj.amplifyapp.com/).

#### Stack:

• Front End: React, Redux (Redux Toolkit), Material-UI  
• API Layer: GraphQL (AWS Amplify -> AppSync)  
• Back End: AWS Amplify -> S3, Lambda, Cognito, DynamoDB

#### Features:

Authentication using AWS Amplify:  

![](/screenshots/001-auth.png)  

Form component with input validation schema and reset on submit:  

![](/screenshots/002-form-validation.png)

Ability to add various timed alerts with individual timers. When the timer expires, the alert is removed from the UI. On hover, the timer can be paused. Each alert now includes a live timer indicator at the bottom:  

![](/screenshots/003-alerts.png)

#### Additional Features:
- On page reload, the app retrieves the alerts from DB that have not yet timed out and displays them with an updated timer indicator.
- The subscription that is listening for the add alert event is enabled, and the state is updated to show newly created alerts by different users.
