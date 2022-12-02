import React, { useContext, useState } from 'react';

import userContext from "./user-context";
import './JobCard.css';

/** Renders a single Job Card
 *
 * - Props: job like
 *
 *    {
        "id": 7,
        "title": "Technical brewer",
        "salary": 157000,
        "equity": "0"
      }

  - Apply: callback function to apply for a job

  - State: none

  *  JobCardList -> JobCard
 */

function JobCard({ job, apply }) {
  const { currentUser } = useContext(userContext);
  const hasApplied = currentUser.applications.includes(job.id);

  /** Apply to a Job */
  async function handleApply() {
    try {
      await apply(job.id, currentUser.username);
      console.log('applied!');
    }
    catch (err) { console.debug(err); }
  }


  return (
    <div className='JobCard'>

      <div className='card'>

        <div className='card-body'>
          <h6 className='card-title'>{job.title}</h6>
          <p>{job.companyName}</p>

          <div> <small> Salary: {job.salary} </small></div>
          <div> <small> Equity: {job.equity} </small></div>


          {hasApplied &&
            <div><button className='btn btn-danger disabled'>Applied!</button></div>
          }
          {!hasApplied &&
            <div><button onClick={handleApply} className='btn btn-danger'>Apply</button></div>
          }
        </div>

      </div>

    </div >
  );


}

export default JobCard;