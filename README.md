# bored
MERN Web App which provides users with recommendations about new activities to try.

- Users can create an account and login so that their activities are saved
- Once logged in, users can request a new activity, and can choose to add it to their dashboard, or decline it. Each activity provides a detailed description, including how many participants are required, the price, the accessibility level, etc.
- Users can track their progress on each activity, and once the acitvity has been completed, they can archive it
- At any point, users can skip acitvities, and start new ones

**Try it here:** https://boredapiapp.herokuapp.com/
- If the app stops working, it is likely because either the Heroku project went to sleep, or the Mongo cluster went into hybernation. In that case, simply download the repo and run "npm run dev"

## Technical Details
- Web app was built using the MERN Stack, and activities are fetched from the Bored API (found online)
- Authentication is securely created using JWT
- Website is hosted on Heroku, and the database was created using Mongo Atlas
- All stlying was created from scratch (by me!) using vanilla CSS

## Screenshots
Below is a collection of screenshots which demonstrate the web experience:

Registrationa and Login Page
![image](https://user-images.githubusercontent.com/34925697/173257573-32b7dfd7-edfc-4050-a877-671820386228.png)

Main Dashboard
![image](https://user-images.githubusercontent.com/34925697/173257601-2d4833b4-b3e8-4bbc-9fd7-84568d5891aa.png)

Ability to accept or decline an activity
![image](https://user-images.githubusercontent.com/34925697/173258382-062ea5e5-4630-4db8-af16-d9812aa9a01a.png)

Abiliity to track progress on current selected activities, as well as view completed activities
![image](https://user-images.githubusercontent.com/34925697/173258409-ea55e6e1-ac67-41a9-8bb0-cbb036a03c69.png)

