import { useState } from 'react';

/** Renders login form
 * props: callback fn setCurrentUser
 * state: form data
 *  RoutesList => LoginForm
 */

function LoginForm({ login }) {

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
    login(formData);
  }

  return (
    <div className='RegisterForm'>
      <form className='form' onSubmit={handleSubmit} >
        <label for="username">Username</label>
        <input type='text' name="username" className='form-control' onChange={handleChange}></input>
        <label for="password">Password</label>
        <input type='text' name="password" className='form-control' onChange={handleChange}></input>
        <button className='btn btn-primary mb-2' >Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;