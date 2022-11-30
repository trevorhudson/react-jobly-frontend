import JoblyApi from "./api";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
// import axios from "axios";
import JobCardList from "./JobCardList";

/** Renders details per company handle
 * - props: none
 * - state:
 *    - company {handle, name, description,numEmployees,jobs:[job1, ...]}
 *    - isLoading = (true/false)
 *
 * App -> RoutesList -> CompanyDetail
*/

function CompanyDetail() {
  const [company, setCompany] = useState();
  const [isLoading, setIsLoading] = useState(true); // move state to company

  const { handle } = useParams();

  /** Queries API for single company  TODO: name function*/
  useEffect(function () {
    async function getCompany() {
      // TODO: move await outside of setState()
      setCompany(await JoblyApi.getCompany(handle));
      setIsLoading(false);
    }
    getCompany();
  }, [handle]);

  return (
    <div className="CompanyDetail">
      {isLoading && <p>Is loading!!!!</p>}
      {!isLoading &&
        <div>
          <h4>{company.name}</h4>
          <p>{company.description}</p>
          <JobCardList jobs={company.jobs} />
        </div>
      }
    </div>
  );
};

export default CompanyDetail;