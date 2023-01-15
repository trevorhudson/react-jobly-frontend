# Jobly Frontend

Jobly is a full featured job board with authentication. Users can browse and apply to active job listings on a standalone page and use the search filter to find a job. A company list page displays all companies in the DB, and each companies page features a list of all posted jobs.

# Table of Contents
1. [Features](#Features)
2. [Tech stack](#Tech-stack)
3. [Install](#Install)
4. [Test](#Test)
5. [Deployment](#Deployment)
6. [Future features](#Future-features)

## Features<a name="Features"></a>:
* Logged out users have the option to sign up for an account. Authentication is manged by the backend.
* Logged in users have access to view companies and jobs, apply for jobs, and the option to update their profile.
* Users can apply and unapply for jobs to keep track of application status.
* Search fields are available for users to filter through companies/jobs.
* Token stored on localStorage so that a user is not automatically logged out upon page refresh.
* Alerts are displayed to the user when signing up for an account and editing the user profile if minimum requirements are not met.


## Tech stack<a name="Tech-stack"></a>:

### Backend ([GitHub Repo](https://github.com/trevorhudson/react-jobly-backend)):
![alt text](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge)
![alt text](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)

### Frontend ([GitHub Repo](https://github.com/trevorhudson/react-jobly-frontend)):
![alt text](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)

### Database Management:
![alt text](https://img.shields.io/badge/-PostgresSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge)

## Install<a name="Install"></a>:

To initialize and seed DB.

    createdb jobly < jobly.sql

This project uses Node.js for the back-end JavaScript runtime environment. To install the backend dependencies from the package.json file:

    npm install

To start the sever (port 3000):

    npm start

## Testing<a name="Testing"></a>:
To run the tests:

    jest -i

## Deployment<a name="Deployment"></a>:
### Backend Deployment:

We used ElephantSQL and Render to deploy our backend.

Seed your remote database:

    pg_dump -O jobly | psql (YOUR_DATABASE_URL)

In Render, create a new instance of “Web service”.

Choose advanced, and enter environmental variables:

    DATABASE_URL: (YOUR_DATABASE_URL)

    SECRET_KEY: (anything)


## Future features<a name="Future-features"></a>:
* Live search
* Show a list of companies applied to
* Add edit form for companies
* Add job application forms