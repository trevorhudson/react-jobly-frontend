import { Link } from 'react-router-dom';
import './CompanyCard.css';


/** Renders single company Card
 *
 * - Props: company like {handle, name, description,numEmployees,jobs:[job1, ...]}
 * - State: none
 *
 * App -> CompanyList -> CompanyCardList -> CompanyCard
 */
function CompanyCard({ company }) {

  return (
    <Link className='CompanyCard' to={`/companies/${company.handle}`}>
      <div className="card-body">
        <h6>{company.name}
          {company.logoUrl && <img className='logo' src={company.logoUrl} alt={company.name}></img>}
        </h6>

        <p><small>{company.description}</small></p>
      </div>
    </Link>
  );
};

export default CompanyCard;
