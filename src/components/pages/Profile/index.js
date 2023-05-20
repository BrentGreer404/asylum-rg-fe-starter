import { useAuth0 } from '@auth0/auth0-react';

export function UserPage() {
  const { user } = useAuth0();
  console.log(user);
  const { name, email, picture } = user;
  return (
    <div style={{ margin: 'auto', padding: '5%' }}>
      <h2 style={{ margin: 'auto', textAlign: 'center' }}>{name}</h2>
      <img
        src={picture}
        alt="Profile"
        style={{ display: 'block', width: '75%', margin: 'auto' }}
      ></img>
      <h4 style={{ margin: 'auto', textAlign: 'center' }}>{email}</h4>
    </div>
  );
}
