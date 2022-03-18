!["Logo"](https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/cover.png)

# Yalper!

Does it ever happen to you that you need a help in your house or filling your taxes and you can't find anyone to help with?
So we have the solutions for that! If you are looking for some one to help you with almost anything you can come and search
our service providers(We call the Yalpers!) and see their availability and book an appointment. By booking your appointment
our Yalper will be notified that he needs to Yalp(Help) someone. He will approve it and you will be notified. This way we can
better use our community and available services around us.

\*Disclaimer - We are using the free plans for all of our APIs

## Key Features

- Ouath Authentication
- Sign up for an account
- Fetch user's browser location
- Book appointment through a calendar and selecting the times
- Search for a service provider based on the long and lat
- View MyServices page if user is a service provider
- Notification center that informs both service provider user and user looking for service

## Tech Stack

### Front End

React | Axios | Reactp-bootstrap | SASS | Google Oauth Authentication

### Back End

Node.js | Express

### Database

postgreSQL

## Getting Started

- You will need **two** terminal windows/tabs for running this application
- In the first terminal `cd` into `client` and run `npm install` to install all of the dependencies. Then run `npm start ` and go to <localhost:3003 in your browser.
- In the second terminal `cd` into `backend` and run `npm install` to install all of the dependencies. Next, seed database `npm db:reset`, Then run `npm start ` to start the server.

## Dependencies

### Client

- axios: 0.21.1
- bootstrap: 4.6.0
- dotenv: 8.2.0
- moment: 2.29.1
- node-sass: 5.0.0
- query-string: 4.3.4
- react: 17.0.1
- react-availability-calendar: 0.3.13
- react-bootstrap: 1.5.2
- react-dom: 17.0.1
- react-feather: 2.0.9
- react-google-login: 5.2.2
- react-icons: 4.2.0
- react-router-dom: 5.2.0
- react-scripts: 4.0.3
- web-vitals: 1.1.0

### Backend

- cookie-parser: 1.4.4
- cors: 2.8.5
- debug: 2.6.9
- express: 4.16.1
- morgan: 1.9.1
- pg: 8.5.1
- pg-native: 3.0.0

### API Keys Required

- Google Oauth API Key

### Google Oauth

- You need to have a google account and use the console.cloud.google.com and create new credentials

!["Logo"](<https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/image%20(0).png>)

!["Logo"](<https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/image%20(1).png>)

- Name your app. Add both URI to point to your front end server location

!["Logo"](<https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/image%20(2).png>)

- copy your client id in an .env file in the root folder of the frond end server

!["Logo"](<https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/image%20(3).png>)

## Screenshots

### Home Page

!["Logo"](https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/new%20home%20page.png)

### Register Page

!["Logo"](https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/Yalper%20Register.png)

### Profile Page

!["Logo"](https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/Profile%20.png)

### Form Page

!["Logo"](https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/Form.png)

### Appointment Page

!["Logo"](https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/Appointment.png)

### Helper list Page

!["Logo"](https://github.com/parniaa/LightHouse_Final/blob/main/resources/img/Yalper%20list.png)
