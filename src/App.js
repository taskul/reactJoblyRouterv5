import './App.css';
import NavBar from './HomePage/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import AuthContext from './Context/AuthContext';
import JoblyApi from './API/api';
import AppRoutes from './HomePage/AppRoutes';
import jwtDecode from 'jwt-decode';
import useLocalStorage from './Hooks/useLocalStorage';


function App() {
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [localData, setLocalData] = useLocalStorage();

  async function getCurrentUser() {
    try {
      if (token) {
        const { username } = jwtDecode(token)
        console.log('USERNAME', username)
        // put the token on the Api class so it can use it to call the API.
        JoblyApi.token = token;
        let user = await JoblyApi.getCurrentUser(username)
        if (user) {
          setCurrentUser(user)
        }
      }
    } catch (e) {
      console.log('Getting user error', e)
      setCurrentUser(null);
    }
  }

  const login = async (userData) => {
    try {
      const res = await JoblyApi.login(userData);
      setToken(res);
      const decoded = jwtDecode(res)
      console.log('TOKEN', decoded)
      return { success: true };
    } catch (e) {
      console.log('failed to login', e);
      return { success: false, e };
    };
  };

  const signup = async (userData) => {
    try {
      const res = await JoblyApi.signup(userData)
      setToken(res);
      return { success: true };
    } catch (e) {
      console.log('failed to login', e);
      return { success: false, e };
    };
  };

  const logout = () => {
    setToken('')
    setCurrentUser('')

  }

  // getting the currently logged in user
  getCurrentUser();
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ currentUser, getCurrentUser, token }}>
          <NavBar logout={logout} />
          <AppRoutes login={login} signup={signup} />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;