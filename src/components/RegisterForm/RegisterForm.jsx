import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operation';
import {
  ButtonForm,
  InputForm,
  LabelForm,
  StyledForm,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm className="reg-form" onSubmit={handleSubmit} autoComplete="off">
      <LabelForm className="reg-label">
        Username
        <InputForm type="text" name="name" />
      </LabelForm>
      <LabelForm className="reg-label">
        Email
        <InputForm type="email" name="email" />
      </LabelForm>
      <LabelForm className="reg-label">
        Password
        <InputForm type="password" name="password" />
      </LabelForm>
      <ButtonForm type="submit">Register</ButtonForm>
    </StyledForm>
  );
};
