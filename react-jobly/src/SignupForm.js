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
      // handle form errors
    }
  }

  return (
    <div className='RegisterForm'>
      <form className='form' onSubmit={handleSubmit} >
        <label htmlFor="username">Username</label>
        <input name="username" className='form-control' onChange={handleChange}></input>
        <label htmlFor="password">Password</label>
        <input name="password" className='form-control' onChange={handleChange}></input>
        <label htmlFor="firstname">FirstName</label>
        <input name="firstName" className='form-control' onChange={handleChange}></input>
        <label htmlFor="lastname">LastName</label>
        <input name="lastName" className='form-control' onChange={handleChange}></input>
        <label htmlFor="email">Email</label>
        <input name="email" className='form-control' onChange={handleChange}></input>
        <button className='btn btn-primary mb-2' >Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;