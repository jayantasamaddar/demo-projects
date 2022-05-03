import './Auth.css';
import { authActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch actions
    return dispatch(authActions.login());
  };

  return (
    <div className="AuthForm">
      <div className="container">
        <h1>Login</h1>{' '}
        <form onSubmit={handleSubmit}>
          <div className="fieldset">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="off" />
          </div>
          <div className="fieldset">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
