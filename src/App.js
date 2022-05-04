import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Auth, Layout } from './components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

export default function App() {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if(user) localStorage.setItem("user", JSON.stringify(user))
    return;
   }
   ,[user]);

  const RequireAuth = ({ children }) => user ? children : <Navigate to="/login" />;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route path="login" element={user ? <Navigate to="/" /> : <Auth />} />
            <Route index element={<RequireAuth><Layout /></RequireAuth>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
