# Jobly Diagram / Schematics
# Warbler

Warbler is a full stack web application of a Twitter clone site. Logged in users can create new messages(posts) and share with followers.
Users are also able to like/unlike posts and follow/unfollow other users.

Deployed app can be found [here](https://warbler-qav5.onrender.com).

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
* Proper authorization checks are in place to ensure only logged in users have access to specific pages.
* Logged in users can search for people and follow or unfollow them.
* Logged in users can posts messages.
* Logged in users can can like or unlike messages.
* Logged in users can edit their own profile.

## Tech stack<a name="Tech-stack"></a>:

### Backend:
![alt text](https://img.shields.io/badge/-Flask-000000?logo=flask&logoColor=white&style=for-the-badge)
![alt text](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white&style=for-the-badge)

### Frontend:
![alt text](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![alt text](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![alt text](https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge)

### Database Management:
![alt text](https://img.shields.io/badge/-PostgresSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge)
![alt text](https://img.shields.io/badge/-SQLAlchemy-F40D12?logo=sqlalchemy&logoColor=white&style=for-the-badge)

## Database Entity Relationships<a name="Database-entity-relationships"></a>:
![alt text](https://github.com/amathew195/flask-warbler/blob/main/images/Warbler%20-%20Entity%20Relationship%20Diagram(2).jpeg?raw=true)

## Install<a name="Install"></a>:
Create Python virtual environment and activate:

    python3 -m venv venv
    source venv/bin/activate

Install dependences from requirements.txt:

    pip install -r requirements.txt

Setup the database:

    createdb warbler
    python seed.py

Create an .env file to hold configurations:

    SECRET_KEY=abc123
    DATABASE_URL=postgresql:///warbler

Start the server:

    flask run

## Testing<a name="Testing"></a>:
There are four test files: two for testing the models, and two for testing the routes/view-functions:

    FLASK_DEBUG=False python -m unittest <name-of-python-file>

Note: We set FLASK_DEBUG=False for this command, so it doesn’t use debug mode, and therefore won’t use the Debug Toolbar during our tests. If you are having an error running tests (comment out the line in your app.py that uses the Debug Toolbar).


## Deployment<a name="Deployment"></a>:
In ElephantSQL, create a 'Tiny Turtle' instance and copy the URL of your new instance.

Seed your database:

    pg_dump -O warbler | psql (url you copied here)

In Render, create a new instance of “Web service”.

Connect to your repository and give your instance a name, which must be globally unique.

Choose advanced, and enter environmental variables:

    DATABASE_URL: URL from ElephantSQL

    SECRET_KEY: anything you want

    PYTHON_VERSION: latest version

Lastly select 'Create Web Service'

## Future features<a name="Future-features"></a>:
* Custom 404 Page
* Optimize queries
* Add change password form
* Add admin users with additional privileges
* Add direct messaging

## Contributers<a name="Contributers"></a>:
* Ashley Mathew
* Trevor Hudson
App General Page Wrapper
Props: none
State: user info
Context: username, user: first name, user:last name, email, applied jobs



        NavBar              Navigation bar
            Props: none
            State: none

        Routes List
            -> /companies
            -> /companies:handle
            -> /jobs
            -> /login
            -> /signup
            -> /profile
            -> /logout

            -> /home

            Homepage            Renders homepage
                Props: None
                state: None

            LoginForm           Renders Login page
                Props: callback fn
                State: form data


            SignUp Form          Renders signup page
                Props: callback fn
                State: form data

            ProfileForm          Renders profile form
                Props: callback fn
                State: form data

            CompaniesList         Render list of companies
                Props: [companies]
                State: company_name, initial=null

                -> SearchBar
                    State: update onChange


            )

                -> Companies        Render list of companies
                        Props: current company
                        State: none

                        -> Company (render single company)

            CompanyDetailPage
                Props: none
                State: none

                -> Jobs (Map out company jobs)
                    -> Job


            JobsList               Render list of jobs
                Props: none
                State: job_name, initial=null (for searching)

                -> SearchBar
                    State: update onChange

                -> Jobs (Map out jobs)
                    -> JobCard
                        apply button

