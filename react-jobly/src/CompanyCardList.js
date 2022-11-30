import CompanyCard from './CompanyCard';

/** Renders filtered list of companies from search term */

function CompanyCardList({ displayedCompanies }) {
  console.log("displayedCompanies", displayedCompanies);
  return (
    <div className='CompanyCardList'>
      {displayedCompanies.map(company => (<CompanyCard key={company.handle} company={company} />))}
    </div>
  );

}

export default CompanyCardList;