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

      <form onSubmit={handleSubmit} className='form-inline col-4 mx-auto'>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type='search'
            className='form-control'
            name='search'
            placeholder='Enter search term..'
            onChange={handleChange}>
          </input>
        </div>

        <button className='btn btn-primary mb-2'>Search</button>

      </form >
    </nav >

  );

}

export default SearchBar;