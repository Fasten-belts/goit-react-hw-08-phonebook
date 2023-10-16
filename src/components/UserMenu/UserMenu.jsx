import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/auth-operation';
import { useAuth } from 'hooks';
import { Button, Text, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper className="menu-wrapper">
      <Text className="username">Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </Button>
    </Wrapper>
  );
};
