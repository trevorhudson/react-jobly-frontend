import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useState } from 'react';
import JoblyApi from "./api";
import JobCardList from './JobCardList';


/**
 * Renders job list page
 *
 * - props: none
 * - state: Complete list of jobs from the API [....job1]
 *
 * App -> RoutesList -> JobList
*/

function JobList() {
  const [displayedJobs, setDisplayedJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  console.log('JobsList: ', displayedJobs);

  /** Triggered on mount, and re-render */
  useEffect(function getJobsOnMount() {

    async function getJobs() {
      const searchResults = searchTerm
        ? await JoblyApi.filterJobs(searchTerm)
        : await JoblyApi.getAllJobs();

      setDisplayedJobs(searchResults);
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

  if (!displayedJobs) return <h1>Loading...</h1>;


  return (
    <div className="JobList">
      JobList
      <SearchBar search={search} />
      {displayedJobs.length
        ? <JobCardList jobs={displayedJobs} />
        : <p>Sorry, no results were found!!</p>}
    </div>
  );
}

export default JobList;