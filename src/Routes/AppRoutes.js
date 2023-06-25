// import { Switch, Route, Redirect } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "../Users/Login"
import Register from '../Users/Register';
import UserProfile from '../Users/UserProfile';
import Companies from '../Companies/Companies';
import Company from '../Companies/Company';
import Jobs from '../Jobs/Jobs';
import HomePage from "../HomePage/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";



function AppRoutes({ login, signup }) {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<Login loginUser={login} />} />
                <Route exact path="/register" element={<Register signup={signup} />} />
                {/* In a protected route we define a path that will be checked 
                    then ProtectedRoutes component checks to see if user is logged in
                    if the user is logged in then Companies component is rendered at /companies route
                    if the user is not logged in then they are redirected to redirectToPath                
                */}
                <Route path="/companies" element={
                    <ProtectedRoutes redirectToPath="/login">
                        <Companies />
                    </ProtectedRoutes>
                } />
                <Route path="/jobs" element={
                    <ProtectedRoutes redirectToPath="/login">
                        <Jobs />
                    </ProtectedRoutes>
                } />
                <Route path="/profile" element={
                    <ProtectedRoutes redirectToPath="/login">
                        <UserProfile />
                    </ProtectedRoutes>
                } />
            </Routes>
        </div>
    )
}

export default AppRoutes;