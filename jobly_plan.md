# Jobly Diagram / Schematics

App                         General Page Wrapper
    Props: none
    State: none

    Jobly                   Render jobly website
        Props: none
        State: companies, jobs (fetch from API)


        NavBar              Navigation bar
            Props: none
            State: current

        Routes List
            -> /companies
            -> /companies:handle
            -> /jobs

            -> /home


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
                Props: {company}
                State: none

                -> Jobs (Map out company jobs)
                    -> Job


            JobsList               Render list of jobs
                Props: [jobs]
                State: job_name, initial=null (for searching)

                -> SearchBar
                    State: update onChange

                -> Jobs (Map out jobs)
                    -> Job
