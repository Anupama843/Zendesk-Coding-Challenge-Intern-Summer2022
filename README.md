# Zendesk Coding Challenge Intern for Summer2022

Coding challenge for Zendesk intern program summer 2022. It is written in JavaScript, using Zendesk API. It's React-based Single-Page Application(SPA), which fetch and display tickets from a user's Zendesk subdomain. It is a browser-based application which support pagination to show tickets (25 tickets per page). It also contains standard unit tests using Jest and engyme library.

## Instruction

Download the zipped files or clone the repository using git

In the project directory, you can run the below steps:

### 0. Envirnment Variable Setup 
This project use evn variable `REACT_APP_USERNAME`, `REACT_APP_PASSWORD`, `REACT_APP_SUBDOMIAN` to store username, password and SUBDOMIAN.
So to run this app you need to add .env file to root directory and add these env variables 
* REACT_APP_USERNAME (Zendesk login username)
* REACT_APP_PASSWORD (Zendesk login password)
* REACT_APP_SUBDOMIAN (Zendesk subdomain)

### 1. To install all dependencies
```
npm install
```

### 2. Runs the app in the development mode.
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### 3. Launches the test runner in the interactive watch mode.
```
npm test
```

### 4. Builds the app for production to the `build` folder.
```
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.






