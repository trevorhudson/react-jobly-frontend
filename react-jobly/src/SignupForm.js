import { useState } from 'react';

/** Renders registration form
 * props: callback fn setCurrentUser
 * state: form data
 *  RoutesList => RegisterForm
 */

function RegisterForm({ signup }) {


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
    signup(formData);
  }

  return (
    <div className='RegisterForm'>
      <form className='form' onSubmit={handleSubmit} >
        <label for="username">Username</label>
        <input name="username" className='form-control' onChange={handleChange}></input>
        <label for="password">Password</label>
        <input name="password" className='form-control' onChange={handleChange}></input>
        <label for="firstname">FirstName</label>
        <input name="firstname" className='form-control' onChange={handleChange}></input>
        <label for="lastname">LastName</label><input name="lastname"></input>
        <label for="email">Email</label>
        <input name="email" className='form-control' onChange={handleChange}></input>
        <button btn btn-primary mb-2 >Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;