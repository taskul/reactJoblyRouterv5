import { useContext, useState } from "react"
import AuthContext from "../Context/AuthContext";
import { useParams, } from "react-router-dom";


export default function UserProfile({ loginUser }) {
    const { currentUser, token } = useContext(AuthContext)
    const { username } = useParams();

    if (username !== currentUser) {
    }

    return (
        <div className="AuthForm">
            <h1>User profile</h1>
            <h3>Welcome {currentUser}</h3>
        </div>
    )
}