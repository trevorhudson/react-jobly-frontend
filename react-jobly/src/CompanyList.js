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
  const [displayedCompanies, setDisplayedCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log('CompanyList: ', displayedCompanies);

  /** Search function passed to SearchBar */
  function search(searchInput) {
    const term = searchInput.search;
    console.log('Set Search Term: ', term);
    setSearchTerm(term);
  }


  useEffect(function () {

    async function handleSearch() {
      console.log('useEffect', searchTerm);
      setIsLoading(true);
      const companies = searchTerm
        ? await JoblyApi.filterCompanies(searchTerm)
        : await JoblyApi.getAllCompanies();
      setDisplayedCompanies(companies);
      setIsLoading(false);
    }
    handleSearch();

  }, [searchTerm]);


  return (
    <div className="CompanyList">

      <SearchBar search={search} />
      {isLoading && <h1>Is loading!!!!!!!</h1>}
      {!isLoading &&
        <CompanyCardList displayedCompanies={displayedCompanies} />
      }
      {(!isLoading && displayedCompanies.length === 0) && <p>Sorry, no results were found!!</p>}
    </div>
  );
};

export default CompanyList;