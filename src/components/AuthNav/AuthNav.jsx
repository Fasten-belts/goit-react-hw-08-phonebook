import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className="nav-link" to="/register">
        Register
      </NavLink>
      <NavLink className="nav-link" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
