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

  const pageNumbers = [...Array(lastPage + 1).keys()].slice(1);
  const displayedPages = pageNumbers.slice(currentPage > 5 ? currentPage - 5 : 0, currentPage > 5 ? currentPage + 5 : 10);



  // const pageNumbers = [...Array(10)].map((_, i) => currentPage + i * 1);


  /** Return to the previous page */
  function prevPage() {
    changePage(currentPage - 1);
  };

  /** Move to the next page */
  function nextPage() {
    changePage(currentPage + 1);
  }

  /** set page to specific page */
  function setCurrentPage(page) {
    changePage(page);
  };


  return (

    <nav className='PageTurner'>
      <ul className='pagination pagination-sm justify-content-center'>


        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <a className='page-link' onClick={() => setCurrentPage(1)} href='#'> {'<<'} </a>
        </li>

        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <a className='page-link' onClick={prevPage} href='#'> {'<'} </a>
        </li>

        {displayedPages.map(pg => (
          <li className='page-item' key={pg}>
            <a className='page-link' value={pg} onClick={() => setCurrentPage(pg)} href='#'> {pg} </a>
          </li>)
        )}

        <li className={`page-item ${currentPage === lastPage && "disabled"}`}>
          <a className='page-link' onClick={nextPage} href='#'> {'>'} </a>
        </li>

        <li className={`page-item ${currentPage === lastPage && "disabled"}`}>
          <a className='page-link' onClick={() => setCurrentPage(lastPage)} href='#'> {'>>'} </a>
        </li>

      </ul>
    </nav >

  );
}


export default PageTurner;