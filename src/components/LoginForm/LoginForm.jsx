import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/auth-operation';
import {
  ButtonForm,
  InputForm,
  LabelForm,
  StyledForm,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm
      className="login-form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <LabelForm className="login-label">
        Email
        <InputForm type="email" name="email" />
      </LabelForm>
      <LabelForm className="login-label">
        Password
        <InputForm type="password" name="password" />
      </LabelForm>
      <ButtonForm type="submit">Log In</ButtonForm>
    </StyledForm>
  );
};
