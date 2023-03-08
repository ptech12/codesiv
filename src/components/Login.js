import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/codesiv/dashboard");
    }, [user, loading]);


    const showErrorToast = (msg, timer) => {
        toast.error(msg || `Something went wrong! Please try again.`, {
            position: "top-right",
            autoClose: timer ? timer : 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const handleLogin = (email, password) => {
        if (logInWithEmailAndPassword(email, password) == 0) {
            showErrorToast("Error (auth/user-not-found).")
        }
    }

    return (
        <div className="login">

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="login__container">
                <h1 className="title"> CodeSiv </h1>
                <p className="mean"> Login to the future of coding</p>
                <br />
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => handleLogin(email, password)}
                >

                    Login
                </button>

                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/codesiv/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/codesiv/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Login;