import { useState } from 'react';
import { useNavigate } from "react-router-dom";

/** Renders profile form
 * props: callback fn setCurrentUser
 * state: form data
 *  RoutesList => ProfileForm
 */

function ProfileForm({ update, currentUser }) {
  const { username } = currentUser;
  const [formData, setFormData] = useState(null);
  console.log('searchBar field: ', formData);
  console.log("currentUser", currentUser);

  const navigate = useNavigate();
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
      console.log("about to update");
      await update(formData, username);
      navigate("/");
    } catch (err) {
      console.log(err);
    }

  }


  return (
    <div className='RegisterForm'>
      <form className='form' onSubmit={handleSubmit} >
        <label htmlFor="username">Username</label>
        <input name="username" placeholder={currentUser.username} disabled="disabled" className='form-control' onChange={handleChange}></input>
        <label htmlFor="firstName">FirstName</label>
        <input name="firstName" placeholder={currentUser.firstName} className='form-control' onChange={handleChange}></input>
        <label htmlFor="lastName">LastName</label>
        <input name="lastName" placeholder={currentUser.lastName} className='form-control' onChange={handleChange}></input>
        <label htmlFor="email">Email</label>
        <input name="email" placeholder={currentUser.email} className='form-control' onChange={handleChange}></input>
        <button className='btn btn-primary mb-2'>Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;