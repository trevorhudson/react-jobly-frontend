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
    <div className='LoginForm'>
      <div className='container col-md-3 offset-md-3 col-lg-6 offset-lg-3' >

        <h3>Login</h3>
        <div className='card'>
          <div className='card-body'>

            <form onSubmit={handleSubmit} >

              <div className='mb-3'>
                <label htmlFor="username">Username</label>
                <input type='text' name="username" className='form-control' onChange={handleChange}></input>
              </div>

              <div className='mb-3'>
                <label htmlFor="password">Password</label>
                <input type='text' name="password" className='form-control' onChange={handleChange}></input>
              </div>

              <div className='d-grid'>
                <button className='btn btn-primary' >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;