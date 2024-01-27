import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useUserContext } from "../features/userContext";
import { auth } from "../firebase";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useUserContext();
    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            navigate("/home");
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const isFormIncomplete = !email || !password;

    return (
        <div className="login">
            <img 
                src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
                alt="" 
            />
            <input 
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <input 
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"  
            />
            <button onClick={handleLogin} disabled={isFormIncomplete}>
                Log in
            </button>
        </div>
    );
}

export default Login;
