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
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(null);

  const displayedCompanies = (companies
    ? companies.slice((page - 1) * 20, page * 20)
    : null
  );


  console.log('CompanyList:', companies);
  console.log("displayCompanies", displayedCompanies);


  /** Triggered on mount, and re-render */
  useEffect(function getCompaniesOnMount() {

    async function getCompanies() {
      const searchResults = searchTerm
        ? await JoblyApi.filterCompanies(searchTerm)
        : await JoblyApi.getAllCompanies();

      setCompanies(searchResults);
      setPage(1);

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

  /** Update current Page, passed to PageTurner
   * Accepts: integer
   */
  function changePage(nextPage) {
    setPage(nextPage);
  }

  if (!displayedCompanies) return <h1>Loading...</h1>;

  return (
    <div className="CompanyList">
      <div className='flex'>
        <SearchBar search={search} />
        <PageTurner currentPage={page} numItems={companies.length} changePage={changePage} />
      </div>

      {displayedCompanies.length

        ? <CompanyCardList displayedCompanies={displayedCompanies} />
        : <p>Sorry, no results were found!!</p>}

    </div>
  );
};

export default CompanyList;;