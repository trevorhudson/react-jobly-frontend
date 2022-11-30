import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import CompanyCardList from './CompanyCardList';
import { useState } from 'react';
import JoblyApi from "./api";


/** Renders company list page
 * - props: none
 * - state:
 *    - displayedCompanies like [company1, company2, ...]
 *    - searchTerm like 'anderson'
 *    - isLoading = (true/false)
 *
 * App -> RoutesList -> CompanyList
*/

function CompanyList() {
  const [displayedCompanies, setDisplayedCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  console.log('CompanyList: ', displayedCompanies);

  /** Triggered on mount, and re-render */
  useEffect(function getCompaniesOnMount() {

    async function getCompanies() {
      const searchResults = searchTerm
        ? await JoblyApi.filterCompanies(searchTerm)
        : await JoblyApi.getAllCompanies();
      setDisplayedCompanies(searchResults);
    }
    getCompanies();

  }, [searchTerm]);


  /** Search function passed to SearchBar
   * Accepts: String
   */
  function search(term) {
    console.log('Set Search Term: ', term);
    setSearchTerm(term);
  }

  if (!displayedCompanies) return <h1>Loading...</h1>;

  return (
    <div className="CompanyList">
      CompanyList
      <SearchBar search={search} />

      {displayedCompanies.length
        ? <CompanyCardList displayedCompanies={displayedCompanies} />
        : <p>Sorry, no results were found!!</p>}

    </div>
  );
};

export default CompanyList;