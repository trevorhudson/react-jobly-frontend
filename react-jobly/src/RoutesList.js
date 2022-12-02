import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';
import SignupForm from './SignupForm';

/** Rendering the list of routes
 * props: none
 * state: none
 * App=>RoutesList
 */

function RoutesList({ login, signup, update, currentUser }) {
  console.debug('Routes', 'currentUser: ', currentUser);

  return (

    <div className='RoutesList col-md-8 offset-md-2'>
      <Routes>

        {/* Unauthorized Routes  */}
        {!currentUser &&
          <>
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
          </>
        }

        <Route path="/" element={<Homepage />} />

        {/* Authorized Routes  */}
        {currentUser &&
          <>
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/profile" element={<ProfileForm update={update} currentUser={currentUser} />} />
          </>
        }

        {/* All auth */}
        <Route path="*" element={<Navigate to='/' />} />

      </Routes >
    </div>
  );
};

export default RoutesList;