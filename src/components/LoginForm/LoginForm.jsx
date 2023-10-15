import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/auth-operation';

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
    <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
      <label className="login-label">
        Email
        <input type="email" name="email" />
      </label>
      <label className="login-label">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
