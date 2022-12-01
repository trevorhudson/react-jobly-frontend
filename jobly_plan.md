# Jobly Diagram / Schematics

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

