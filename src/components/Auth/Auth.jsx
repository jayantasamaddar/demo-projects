import './Auth.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../connections/firebase';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * 
   * Declare State Variables
   */

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => (
      {...prev, [name]: value}
    ));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // dispatch actions
      dispatch(authActions.login(user));
      navigate("/");
      // ...
    })
    .catch(({ code, message }) => {
      setError(true);
      console.log(`${code}: ${message}`);
    });
  };

  return (
    <div className="AuthForm">
      <div className="container">
        <h1>Login</h1>{' '}
        <form onSubmit={handleSubmit}>
          <div className="fieldset">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="off" onChange={handleChange} />
          </div>
          <div className="fieldset">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
          </div>

          <button className="login-btn" type="submit">Login</button>
          {error && <span>Wrong email or password!</span>}
        </form>
      </div>
    </div>
  );
};

export default Auth;
