import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../MainCss/Forms.css"

export default function Login({ loginUser }) {
    const INITIAL_DATA = {
        username: "",
        password: ""
    }
    const [loginFormData, setLoginFormData] = useState(INITIAL_DATA);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await loginUser(loginFormData);
        if (result.success) {
            navigate('/profile')
        }
        setLoginFormData(INITIAL_DATA);
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
                    value={loginFormData.username}
                    onChange={handleChange}
                    className="Form-input"
                />
                <label htmlFor="password" className="Form-label">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    onChange={handleChange}
                    className="Form-input"
                />
                <br />
                <button className="Form-btn">Login</button>
            </form>
        </div>
    )
}
