function CompanyCard({ company }) {
  console.log(company)
  return (
    <div className="CompanyCard">
      <h3>{company.name}</h3>
      <img src={company.logoUrl}></img>
      <p>{company.description}</p>
    </div>
  );
};

export default CompanyCard
