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
    <div className='CompanyCard'>

      <Link className='card' to={`/companies/${company.handle}`}>

        <div className="card-body">
          <h6 className='card-title'>{company.name}{company.logoUrl &&
            <img className='float-end ms-5' style={{ width: 50 }} src={company.logoUrl} alt={company.name}></img>}
          </h6>
          <p><small>{company.description}</small></p>

        </div>
      </Link >
    </div >
  );
};

export default CompanyCard;
