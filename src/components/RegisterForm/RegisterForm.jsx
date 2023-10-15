import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operation';

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
    <form className="reg-form" onSubmit={handleSubmit} autoComplete="off">
      <label className="reg-label">
        Username
        <input type="text" name="name" />
      </label>
      <label className="reg-label">
        Email
        <input type="email" name="email" />
      </label>
      <label className="reg-label">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
