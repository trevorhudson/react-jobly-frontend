import './PageTurner.css';
/** Renders page turner
 *
 * prop : Current page number, function to change the page
 * state: No state
 *
 * CompanyList,JobList => PageTurner
 */

function PageTurner({ currentPage, changePage, numItems }) {

  const itemsPerPage = 20;
  const lastPage = Math.ceil(numItems / itemsPerPage);

  console.log('current Page', currentPage);
  console.log('last Page: ', lastPage);
  console.log('items per Page', itemsPerPage);


  /** Handles button clicks */
  function handleClick(evt) {
    const { value } = evt.target;
    const nextPage = value === 'back' ? currentPage - 1 : currentPage + 1;
    changePage(nextPage);

  }

  return (
    <div className='PageTurner'>

      <button className='btn back-btn' value={'back'} onClick={handleClick} disabled={currentPage <= 1}>
        -
      </button>
      <p> {`${currentPage} / ${lastPage}`} </p>
      <button className='btn forward-btn' value={'forward'} onClick={handleClick} disabled={currentPage >= lastPage}>
        +
      </button>
    </div >

  );
}


export default PageTurner;