import { Link } from 'react-router-dom';

function CompanyCard({ company }) {

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${company.handle}`}>
        <h3>{company.name}</h3>
        <img src={company.logoUrl}></img>
        <p>{company.description}</p>
      </Link>
    </div>
  );
};

export default CompanyCard;
