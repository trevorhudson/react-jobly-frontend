/** Renders profile form
 * props: callback fn setCurrentUser
 * state: form data
 *  RoutesList => ProfileForm
 */

function ProfileForm({ }) {
  return (
    <form>
      <label for="username">Username</label><input name="username"></input>
      <label for="firstname">FirstName</label><input name="firstname"></input>
      <label for="lastname">LastName</label><input name="lastname"></input>
      <label for="email">Email</label><input name="email"></input>
      <button>Submit</button>
    </form>
  );
}

export default ProfileForm;