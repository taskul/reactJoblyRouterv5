import { useContext, useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import AuthContext from "../Context/AuthContext";

export default function NavBar({ logout }) {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser } = useContext(AuthContext)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false)
    }

    const handleLogout = () => {
        logout()
        closeNavbar()
    }

    return (
        <nav className="NavBar">
            <div
                className={`NavBar-mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <img className="NavBar-logo-img" src={logo} alt="logo" />
            <ul className={`NavBar-links ${isOpen ? "active" : ""}`}>
                <div className="NavBar-logo">
                    <li className="NavBar-link" onClick={closeNavbar}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </div>
                {currentUser ?
                    // if user logged in show profile and logout links
                    <div className="NavBar-userNav">
                        <li className="NavBar-link" onClick={closeNavbar}>
                            <NavLink to='/companies'>Companies</NavLink>
                        </li>
                        <li className="NavBar-link" onClick={closeNavbar}>
                            <NavLink to='/jobs'>Jobs</NavLink>
                        </li>
                        <li className="NavBar-link" onClick={closeNavbar}>
                            <NavLink to='/profile'>Profile</NavLink>
                        </li>
                        <li className="NavBar-link" onClick={handleLogout}>
                            <NavLink to='/'>Logout</NavLink>
                        </li>
                    </div>
                    :
                    // if user not logged in show login and register links
                    <div className="NavBar-userNav">
                        <li className="NavBar-link" onClick={closeNavbar}>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                        <li className="NavBar-link" onClick={closeNavbar}>
                            <NavLink to='/register'>Register</NavLink>
                        </li>
                    </div>
                }
            </ul>
        </nav>
    )
}
