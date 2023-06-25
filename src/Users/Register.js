import { useState } from "react";
import "../MainCss/Forms.css"
import { useNavigate } from "react-router-dom";

export default function Register({ signup }) {
    const INITIAL_DATA = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",

    }

    const [registerFormData, setRegisterFormData] = useState(INITIAL_DATA);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await signup(registerFormData);
        if (result.success) {
            navigate('/profile')
        }
        setRegisterFormData(INITIAL_DATA);
    }

    return (
        <div className="Form-Container">
            <form onSubmit={handleSubmit} className="Form">
                <label htmlFor="username" className="Form-label">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={registerFormData.username}
                    onChange={handleChange}
                    className="Form-input"
                />
                <label htmlFor="password" className="Form-label">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={registerFormData.password}
                    onChange={handleChange}
                    className="Form-input"
                />
                <label htmlFor="firstName" className="Form-label">First Name:</label>
                <input
                    type="firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={registerFormData.firstName}
                    onChange={handleChange}
                    className="Form-input"
                />
                <label htmlFor="lastName" className="Form-label">Last Name:</label>
                <input
                    type="lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={registerFormData.lastName}
                    onChange={handleChange}
                    className="Form-input"
                />
                <label htmlFor="email" className="Form-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={registerFormData.email}
                    onChange={handleChange}
                    className="Form-input"
                />
                <br />
                <button className="Form-btn">Sign Up</button>
            </form>
        </div>
    )
}