import './App.css';
import NavBar from './HomePage/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import AuthContext from './Context/AuthContext';
import JoblyApi from './API/api';
import AppRoutes from './HomePage/AppRoutes';


function App() {
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  const login = async (userData) => {
    try {
      const res = await JoblyApi.login(userData);
      setToken(res.token);
      setCurrentUser(userData.username)
      console.log(res.token)
      console.log(userData.username)
      return { success: true, username: userData.username }
    } catch (e) {
      console.log('failed to login', e);
      return { success: false, e }
    }
  }


  const signup = async (userData) => {
    const res = await JoblyApi.register(userData)
    setToken(res.token)
    setCurrentUser(userData.username)
  }

  const logout = () => {
    setToken('')
    setCurrentUser('')

  }


  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ currentUser, token }}>
          <NavBar logout={logout} />
          <AppRoutes login={login} signup={signup} />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;