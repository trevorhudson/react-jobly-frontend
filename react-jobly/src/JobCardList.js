import JobCard from './JobCard';


/** Renders List of Job Cards
 * - Props: jobs: [{"id", "title", "salary", "equity"}, ... ]
 * - State: none
 *
 * App -> JobList -> JobCardList
 */
function JobCardList({ jobs }) {
  console.log('jobCardList', jobs);
  return (
    <div className='JobCardList'>
      {jobs.map(job => (<JobCard key={job.id} job={job} />))}
    </div>
  );
}

export default JobCardList;