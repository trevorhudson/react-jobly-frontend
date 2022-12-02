import CompanyCard from './CompanyCard';


/** Renders filtered list of companies from search term
 *
 * - Props: displayedCompanies : [{handle, name, description,numEmployees,jobs:[job1, ...]
 * - State: none
 *
 * App -> CompanyList -> CompanyCardList
*/

function CompanyCardList({ displayedCompanies }) {
  // console.log("displayedCompanies", displayedCompanies);

  return (
    <div className='CompanyCardList'>
      {displayedCompanies.map(company =>
        (<CompanyCard key={company.handle} company={company} />))}
    </div>
  );

}

export default CompanyCardList;