/** Renders login form
 * props: callback fn setCurrentUser
 * state: form data
 *  RoutesList => LoginForm
 */

function LoginForm({ }) {
  return (
    <form>
      <label for="username">Username</label><input name="username"></input>
      <label for="password">Password</label><input name="password"></input>
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;