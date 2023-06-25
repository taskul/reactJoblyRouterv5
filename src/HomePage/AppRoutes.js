// import { Switch, Route, Redirect } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "../Users/Login"
import Register from '../Users/Register';
import UserProfile from '../Users/UserProfile';
import Companies from '../Companies/Companies';
import Company from '../Companies/Company';
import Jobs from '../Jobs/Jobs';
import HomePage from "./HomePage";



function AppRoutes({ login, signup }) {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<Login loginUser={login} />} />
                <Route exact path="/register" element={<Register signup={signup} />} />
                <Route exact path="/companies" element={<Companies />} />
                <Route exact path="/companies/:company_handle" element={<Company />} />
                <Route exact path="/jobs" element={<Jobs />} />
                <Route exact path="/profile" element={<UserProfile />} />

            </Routes>
        </div>
    )
}

export default AppRoutes;