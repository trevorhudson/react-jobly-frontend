
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

  - State: none

  *  JobCardList -> JobCard
 */

function JobCard({ job }) {
  // console.log('JobCard', JobCard);

  return (
    <div className='JobCard'>
      <div className='card-body'>
        <h6>{job.title}</h6>
        <p>{job.companyName}</p>
        <div> <small> Salary: {job.salary} </small></div>
        <div> <small> Equity: {job.equity} </small></div>
      </div>
    </div>
  );


}

export default JobCard;