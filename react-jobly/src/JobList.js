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
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  console.log('JobsList: ', displayedJobs);


  /** Search function passed to SearchBar */
  function search(searchInput) {
    const term = searchInput.search;
    console.log('Set Search Term: ', term);
    setSearchTerm(term);
  }

  /** Query API for search terms */
  useEffect(function () {
    async function handleSearch() {
      setIsLoading(true);

      const companies = searchTerm
        ? await JoblyApi.filterJobs(searchTerm)
        : await JoblyApi.getAllJobs();

      setDisplayedJobs(companies);
      setIsLoading(false);
    }
    handleSearch();
  }, [searchTerm]);


  return (
    <div className="JobList">
      JobList
      <SearchBar search={search} />
      {isLoading && <h1>Is loading!!!!!!!</h1>}
      {!isLoading &&
        <JobCardList jobs={displayedJobs} />
      }
      {(!isLoading && displayedJobs.length === 0) && <p>Sorry, no results were found!!</p>}

    </div>
  );
}

export default JobList;