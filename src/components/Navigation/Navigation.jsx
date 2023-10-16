import { useAuth } from 'hooks';
import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link className="nav-link" to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className="nav-link" to="/contacts">
          Contacts
        </Link>
      )}
    </Nav>
  );
};
