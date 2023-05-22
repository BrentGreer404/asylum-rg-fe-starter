import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const LinkWithAuth = ({ ...props }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Link {...props}></Link> : null;
};

export const LogInOut = ({ ...props }) => {
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <Link {...props} to="/" onClick={() => logout()}>
      Log Out
    </Link>
  ) : (
    <Link {...props} onClick={() => loginWithPopup()}>
      Log In
    </Link>
  );
};
