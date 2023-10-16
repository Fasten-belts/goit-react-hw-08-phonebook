import { Link, Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <Link className="nav-link" to="/register">
        Register
      </Link>
      <Link className="nav-link" to="/login">
        Log In
      </Link>
    </Wrapper>
  );
};
