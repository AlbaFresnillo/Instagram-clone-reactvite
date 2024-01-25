import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useAppContext } from "../app/appContext";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Login successful for user:", user);
        })
        .catch((error) => {
            console.error("Error during login:", error.message);
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
