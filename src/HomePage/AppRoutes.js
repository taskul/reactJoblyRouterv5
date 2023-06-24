import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Users/Login";
import Register from '../Users/Register';
import UserProfile from '../Users/UserProfile';
import Companies from '../Companies/Companies';
import Company from '../Companies/Company';
import Jobs from '../Jobs/Jobs';
import HomePage from "./HomePage";



function AppRoutes ({login, signup}) {
    return (
        <div>
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <Login loginUser={login} />
                </Route>
                <Route path="/register">
                    <Register signup={signup} />
                </Route>
                <Route exact path="/companies">
                    <Companies />
                </Route>
                <Route exact path="/companies/:company_handle">
                    <Company />
                </Route> 
                <Route exact path="/jobs">
                    <Jobs />
                </Route>
                <Route exact path="/profile">
                    <UserProfile />
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default AppRoutes;