import React, { useState } from "react";
import "./Signup.css";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);

    const handleSignUp = (event) => {
        event.preventDefault();

        if (!email || !password || !username) {
            setError("All fields are required.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                signInWithEmailAndPassword(auth, email, password).then(
                    updateProfile(auth.currentUser, {
                        displayName: username,
                    })
                );
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="signup">
            <img 
                src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
                alt=""
            />
            <input 
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                value={email}
            />
            <input 
                onChange={(e) => setUsername(e.target.value)}
                type="username"
                placeholder="Username"
                value={username}
            />
            <input 
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                value={password}
            />
            {error && <div className="error-message">{error}</div>}
            <button onClick={handleSignUp}>Sign up</button>
        </div>
    );
}

export default Signup;
