import { useState } from 'react';


/** Reusable Search Bar
 *
 * - Props: search()
 * - State: String, currently entered text
 *
 * App -> RoutesList -> CompanyList, JobList -> SearchBar
*/
function SearchBar({ search }) {
  const [formData, setFormData] = useState(null);
  console.log('searchBar field: ', formData);


  /** Update form input dynamically. */
  function handleChange(evt) {
    console.log("SearchBar onChange", evt);
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }


  /** onSubmit -> submit search terms. Calls parent function */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData.search);
  }

  return (

    <nav className='SearchBar'>


      <div className='d-flex flex-column justify-content-center'>
        <form onSubmit={handleSubmit} className='row g-3 '>


          <div className='col-3'>
            <input
              type='search'
              className='form-control'
              name='search'
              placeholder='Enter search term..'
              onChange={handleChange}>
            </input>
          </div>

          <div className='col-auto'>
            <button className='btn btn-primary mb-2'>Search</button>
          </div>

        </form >
      </div>
    </nav >

  );

}

export default SearchBar;;