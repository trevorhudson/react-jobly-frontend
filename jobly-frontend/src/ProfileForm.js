import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import userContext from "./user-context";

/** Renders profile form
 * props: callback fn setCurrentUser
 * state: form data
 *  RoutesList => ProfileForm
 */

function ProfileForm({ update }) {
  const { currentUser } = useContext(userContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  });
  const [errors, setErrors] = useState(null);
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
      await update(formData, currentUser.username);
      navigate("/");
    } catch (err) {
      setErrors(err);
      console.log(err);
    }

  }


  return (
    <div className='ProfileForm'>
      <div className='container col-md-3 offset-md-3 col-lg-6 offset-lg-3' >
        <h3>Update Profile</h3>
        <div className='card'>
          <div className='card-body'>
            <form className='form' onSubmit={handleSubmit} >
              {errors && errors.map(error => (<div key={error} className="alert alert-danger" role="alert">{error}</div>))}
              <div className="mb-3"><label htmlFor="username">Username</label>
                <input name="username" value={currentUser.username}
                  disabled="disabled" className='form-control'
                  onChange={handleChange}></input></div>
              <div className="mb-3"><label htmlFor="firstName">FirstName</label>
                <input name="firstName" value={formData.firstName}
                  className='form-control' onChange={handleChange}></input></div>
              <div className="mb-3"><label htmlFor="lastName">LastName</label>
                <input name="lastName" value={formData.lastName}
                  className='form-control' onChange={handleChange}></input></div>
              <div className="mb-3"><label htmlFor="email">Email</label>
                <input name="email" value={formData.email}
                  className='form-control' onChange={handleChange}></input></div>
              <div className="d-grid"> <button className='btn btn-primary mb-2'>
                Submit</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;;