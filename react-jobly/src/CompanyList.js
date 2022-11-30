import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import CompanyCardList from './CompanyCardList';
import { useState } from 'react';
import JoblyApi from "./api";


/** Renders company list page
 * props: none
 * state: list companies from api request [company1,company2,company3]
 * App=>RoutesList=>CompanyList
*/

function CompanyList() {
  const [companiesFilter, setCompaniesFilter] = useState();
  const [searchTerm, setSearchTerm] = useState();

  console.log('CompanyList: ', companiesFilter);

  /** Search function passed to SearchBar */
  function search(searchInput) {
    const term = searchInput.search;
    console.log('Set Search Term: ', term);
    setSearchTerm(term);
  }


  useEffect(function () {

    async function handleSearch() {
      console.log('useEffect', searchTerm);

      const companies = searchTerm
        ? await JoblyApi.filterCompanies(searchTerm)
        : await JoblyApi.getAllCompanies();
      setCompaniesFilter(companies);
    }
    handleSearch();

  }, [searchTerm]);


  return (
    <div className="CompanyList">
      CompanyList
      <SearchBar search={search} />
      <CompanyCardList />

    </div>
  );
};

export default CompanyList;