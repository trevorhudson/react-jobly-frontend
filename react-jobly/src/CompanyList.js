import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import CompanyCardList from './CompanyCardList';
import { useState } from 'react';
import JoblyApi from "./api";
import PageTurner from "./PageTurner";



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
  const [companies, setCompanies] = useState(null);
  const [displayedCompanies, setDisplayedCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(null);

  console.log('CompanyList:', companies);
  console.log("displayCompanies", displayedCompanies);


  /** Triggered on mount, and re-render */
  useEffect(function getCompaniesOnMount() {

    async function getCompanies() {
      const searchResults = searchTerm
        ? await JoblyApi.filterCompanies(searchTerm)
        : await JoblyApi.getAllCompanies();
      setCompanies(searchResults);
      setPageNumber(1);
    }
    getCompanies();

  }, [searchTerm]);

  /**Triggered when page number changes */
  useEffect(function displayCompaniesOnMount() {
    if (companies) {
      setDisplayedCompanies(companies.slice(pageNumber - 1, pageNumber * 20));
    }
  }
    , [pageNumber]);

  /** Search function passed to SearchBar
   * Accepts: String
   */
  function search(term) {
    console.log('Set Search Term: ', term);
    setSearchTerm(term);
  }
  function changePage(page) {
    setPageNumber(page);
  }

  if (!displayedCompanies) return <h1>Loading...</h1>;

  return (
    <div className="CompanyList">
      CompanyList
      <SearchBar search={search} />
      <PageTurner currentPage={pageNumber} changePage={changePage} />
      {displayedCompanies.length
        ? <CompanyCardList displayedCompanies={displayedCompanies} />
        : <p>Sorry, no results were found!!</p>}

    </div>
  );
};

export default CompanyList;