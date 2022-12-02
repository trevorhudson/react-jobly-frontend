import JobCard from './JobCard';


/** Renders List of Job Cards
 * - Props: jobs: [{"id", "title", "salary", "equity"}, ... ]
 *    - Apply -> callback function to apply to job, passed to JobCard
 * - State: none
 *
 * App -> JobList -> JobCardList -> JobCard
 */
function JobCardList({ jobs, apply }) {
  // console.log('jobCardList', jobs);

  return (
    <div className='JobCardList'>
      {jobs.map(job => (<JobCard apply={apply} key={job.id} job={job} />))}
    </div>
  );
}

export default JobCardList;