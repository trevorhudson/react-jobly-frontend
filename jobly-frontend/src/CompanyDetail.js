import JoblyApi from "./api";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
// import axios from "axios";
import JobCardList from "./JobCardList";

/** Renders details per company handle
 * - props: Apply -> callback function to apply for a job
 * - state:
 *    - company {handle, name, description,numEmployees,jobs:[job1, ...]}
 *    - isLoading = (true/false)
 *
 * App -> RoutesList -> CompanyDetail
*/

function CompanyDetail({ apply }) {
  const [company, setCompany] = useState(null);
  console.log("setCompany", company);

  const { handle } = useParams();
  const navigate = useNavigate();

  /** Triggered on mount, and re-render */
  useEffect(function getCompanyOnMount() {
    async function getCompany() {
      try {
        const companyDetail = await JoblyApi.getCompany(handle);
        setCompany(companyDetail);
      } catch (error) {
        navigate("/companies");
      }
    }
    getCompany();
  }, [handle]);

  if (!company) return <h1>Loading...</h1>;

  return (
    <div className="CompanyDetail ">

      {company ?
        <>
          <h4 className='card-title'>{company.name}</h4>
          <p className='card-text'>{company.description}</p>
          <JobCardList apply={apply} jobs={company.jobs} />
        </> :
        <p>Company doesn't exist!!</p>
      }

    </div>
  );
};

export default CompanyDetail;