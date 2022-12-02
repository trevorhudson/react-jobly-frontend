import { useState } from 'react';

/** Renders profile form
 * props: callback fn setCurrentUser
 * state: form data
 *  RoutesList => ProfileForm
 */

function ProfileForm({ updateUser }) {

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
    updateUser(formData);
  }



  return (
    <div className='RegisterForm'>
      <form className='form' onSubmit={handleSubmit} >
        <label htmlFor="username">Username</label>
        <input name="username" className='form-control' onChange={handleChange}></input>
        <label htmlFor="firstname">FirstName</label>
        <input name="firstname" className='form-control' onChange={handleChange}></input>
        <label htmlFor="lastname">LastName</label>
        <input name="lastname" className='form-control' onChange={handleChange}></input>
        <label htmlFor="email">Email</label>
        <input name="email" className='form-control' onChange={handleChange}></input>
        <button className='btn btn-primary mb-2'>Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;