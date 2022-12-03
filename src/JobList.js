import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useState } from 'react';
import JoblyApi from "./api";
import JobCardList from './JobCardList';
import PageTurner from "./PageTurner";



/**
 * Renders job list page
 *
 * - props: apply -> callback funciton to apply for a job
 * - state: Complete list of jobs from the API [....job1]
 *
 * App -> RoutesList -> JobList
*/

function JobList({ apply }) {
  const [jobs, setJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(null);

  const displayedJobs = (jobs
    ? jobs.slice((page - 1) * 20, page * 20)
    : null
  );


  // console.log('JobsList: ', jobs);
  // console.log('Displayed JobsList: ', displayedJobs);

  /** Triggered on mount, and re-render */
  useEffect(function getJobsOnMount() {

    async function getJobs() {
      const searchResults = searchTerm
        ? await JoblyApi.filterJobs(searchTerm)
        : await JoblyApi.getAllJobs();

      setJobs(searchResults);
      setPage(1);

    }
    getJobs();

  }, [searchTerm]);


  /** Search function passed to SearchBar.
   * Accepts: String
  */
  function search(term) {
    console.log('Set Search Term: ', term);
    setSearchTerm(term);
  }

  /** Update current Page, passed to PageTurner
 * Accepts: integer
 */
  function changePage(nextPage) {
    setPage(nextPage);
  }

  if (!displayedJobs) return <h1>Loading...</h1>;


  return (
    <div className="JobList">
      <SearchBar search={search} />
      <PageTurner currentPage={page} numItems={jobs.length} changePage={changePage} />

      {displayedJobs.length
        ? <JobCardList apply={apply} jobs={displayedJobs} />
        : <p>Sorry, no results were found!!</p>}
    </div>
  );
}

export default JobList;