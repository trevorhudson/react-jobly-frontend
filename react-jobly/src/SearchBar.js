import { useState } from 'react';


/** Reusable Search Bar
 *
 * - Props: search()
 * - State: String, currently entered text
 *
 * App -> RoutesList -> CompanyList, JobList -> SearchBar
*/
function SearchBar({ search }) {
  const [formData, setFormData] = useState('');
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
    <div className='SearchBar'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            className='form-control'
            name='search'
            placeholder='Enter search term..'
            onChange={handleChange}>
          </input>
        </div>
        <div>
          <button className='btn'>Submit</button>
        </div>
      </form >
    </div >

  );

}

export default SearchBar;