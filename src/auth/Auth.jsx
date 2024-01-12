import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import './Auth.css'; // Import a separate CSS file for styles

const Auth = () => {
    const [signUp, setSignUp] = useState(false);

    const toggleSignUp = () => {
        setSignUp(!signUp);
    };

    return (
        <div className="inner-container py-4 flex justify-center items-center min-h-screen relative">
            <div className={`rounded-3xl shadow-md auth-container ${signUp ? "sign-up" : "login"}`}>
                <div className="background-panel z-10 shadow-md">
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <button onClick={toggleSignUp} className="w-48 bg-white text-black rounded-md shadow-md p-2 font-bold">{signUp ? "Login" : "Sign Up"}</button>
                        <button className="w-48 bg-white text-black rounded-md shadow-md p-2 font-bold flex items-center justify-center gap-2">
                            <FaGoogle className="" /> Login With Google
                        </button>
                    </div>
                </div>
                <div className={`absolute form-panel w-1/2 h-full items-center justify-center top-0 left-0 ${signUp ? "flex flex-col items-center justify-center gap-3" : "hidden"} `}>
                    <input type="email" placeholder="email" className="w-80 border-black rounded-md shadow-md p-2" />
                    <input type="password" placeholder="password" className="w-80 border-black rounded-md shadow-md p-2" />
                    <button className="w-32 bg-yellow-400 rounded-md shadow-md p-2 font-bold">{signUp ? "Sign Up" : "Login"}</button>
                </div>
                <div className={`absolute form-panel w-1/2 h-full items-center justify-center top-0 right-0 ${signUp ? "hidden" : "flex flex-col items-center justify-center gap-3"} `}>
                    <input type="email" placeholder="email" className="w-80 border-black rounded-md shadow-md p-2" />
                    <input type="password" placeholder="password" className="w-80 border-black rounded-md shadow-md p-2" />
                    <button className="w-32 bg-yellow-400 rounded-md shadow-md p-2 font-bold">{signUp ? "Sign Up" : "Login"}</button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
