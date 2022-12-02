import { useState } from 'react';
import { useNavigate } from "react-router-dom";


/** Renders login form
 * props: callback fn setCurrentUser
 * state: form data
 *  RoutesList => LoginForm
 */

function LoginForm({ login }) {

  const [formData, setFormData] = useState(null);

  const navigate = useNavigate();

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
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      console.log('about to login');
      await login(formData);
      console.log('Post login, route to /companies');
      navigate('/companies');
      console.log('Post NAVIGATE, route to /companies');
    }

    catch (err) {
      // handle form errors
    }

  }

  return (
    <div className='RegisterForm'>
      <form className='form' onSubmit={handleSubmit} >
        <label htmlFor="username">Username</label>
        <input type='text' name="username" className='form-control' onChange={handleChange}></input>
        <label htmlFor="password">Password</label>
        <input type='text' name="password" className='form-control' onChange={handleChange}></input>
        <button className='btn btn-primary mb-2' >Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;