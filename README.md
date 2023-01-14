# Jobly Backend

Jobly is a full stack web application of a mock job board site where users can create an account and login. Logged in users can browse through a list of companies and/or jobs with the ability to filter the list using the search bar. Each company has a list of job openings that a user can view and/or apply to.

# Table of Contents
1. [Features](#Features)
2. [Tech stack](#Tech-stack)
3. [Database Entity Relationships](#Database-entity-relationships)
4. [Install](#Install)
5. [Testing](#Testing)
6. [Deployment](#Deployment)
7. [Future features](#Future-features)
8. [Contributers](#Contributers)

## Features<a name="Features"></a>:
* Utilizes RESTful API
* Users must create an account to access the application. A valid email is not required, but passwords are hashed and authenticated using bcrypt.
* Proper authorization checks are in place to ensure admin position can complete additional activities (ex. creating, updating, and deleting companies) and regular users cannot.
* Users can browse through library of companies and/or jobs with the option to filter using the search bar.
* "Apply" feature allows users to keep track of which jobs they have already applied for.
* Users can update their profile, but cannot change their username.
* Getting information on a user, updating, or deleting a user is only permitted by either an admin, or by that user.

## Tech stack<a name="Tech-stack"></a>:

### Backend:
![alt text](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge)
![alt text](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)

### Frontend ([GitHub Repo](https://github.com/amathew195/react-jobly)):
![alt text](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)

### Database Management:
![alt text](https://img.shields.io/badge/-PostgresSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge)

## Database Entity Relationships<a name="Database-entity-relationships"></a>:
![alt text](https://github.com/amathew195/express-jobly/blob/main/images/Jobly%20-%20Entity%20Relationship%20Diagram%20-%20Cropped.jpeg?raw=true)

## Install<a name="Install"></a>:
To set up and load the database:

    createdb jobly < jobly.sql

This project uses Node.js for the back-end JavaScript runtime environment. To install the backend dependencies from the package.json file:

    npm install

To start the server (port 3001):

    npm start

## Testing<a name="Testing"></a>:
To run the tests:

    jest -i

Note: Any time you run our tests here, you will need to use the -i flag for Jest, so that the tests run “in band” (in order, not at the same time)

### Coverage Report:
![alt text](https://github.com/amathew195/express-jobly/blob/main/images/Jobly%20Test%20Coverage.jpg?raw=true)

## Deployment<a name="Deployment"></a>:
### Backend Deployment:
We used ElephantSQL and Render to deploy our backend.

In ElephantSQL, create a 'Tiny Turtle' instance and copy the URL of your new instance.

Seed your database:

    pg_dump -O jobly | psql (url you copied here)

In Render, create a new instance of “Web service”.

Connect to your repository and give your instance a name, which must be globally unique.

Choose advanced, and enter environmental variables:

    DATABASE_URL: URL from ElephantSQL

    SECRET_KEY: anything you want

Lastly select 'Create Web Service'

## Future features<a name="Future-features"></a>:
* Dynamic live search
* Add additional search filters to search by number of employees, industry, position
* Have job application forms available for the user to submit
* Allow users to upload resume
* Allow status updates for job. For example, ‘interested’, ‘applied’, ‘accepted’, ‘rejected’


## Contributers<a name="Contributers"></a>:
* Ashley Mathew
* Jen Reuting