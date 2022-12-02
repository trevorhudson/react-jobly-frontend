import { useState } from 'react';
import { useNavigate } from "react-router-dom";

/** Renders registration form
 * props: callback fn setCurrentUser
 * state: form data
 *  RoutesList => RegisterForm
 */

function RegisterForm({ signup }) {

  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);

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
      await signup(formData);
      navigate('/companies');
    }
    catch (err) {
      setErrors(err);
      console.log(err);
    }
  }

  return (
    <div className='RegisterForm'>
      <div className='container col-md-6 offset-md-3 col-lg-6 offset-lg-3' >
        <h3>Signup</h3>

        <div className='card'>
          <div className='card-body'>
            {errors && errors.map(error => (<div key={error} className="alert alert-danger" role="alert">{error}</div>))}


            <form onSubmit={handleSubmit} >


              <div className='mb-3'>
                <label htmlFor="username">Username</label>
                <input name="username" className='form-control' onChange={handleChange}></input>
              </div>
              <div className='mb-3'>
                <label htmlFor="password">Password</label>
                <input name="password" className='form-control' onChange={handleChange}></input>
              </div>
              <div className='mb-3'>
                <label htmlFor="firstname">FirstName</label>
                <input name="firstName" className='form-control' onChange={handleChange}></input>
              </div>
              <div className='mb-3'>
                <label htmlFor="lastname">LastName</label>
                <input name="lastName" className='form-control' onChange={handleChange}></input>
              </div>
              <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input name="email" className='form-control' onChange={handleChange}></input>
              </div>
              <div className='d-grid'>
                <button className='btn btn-primary mb-2' >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;;