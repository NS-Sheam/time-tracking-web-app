import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import './Auth.css'; // Import a separate CSS file for styles

const Auth = () => {
    const [signUp, setSignUp] = useState(false);

    const toggleSignUp = () => {
        setSignUp(!signUp);
    };

    const handleLoginSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


    }

    return (
        <div className="inner-container py-4 flex justify-center items-center min-h-screen relative">
            <div className={`rounded-3xl shadow-2xl border-white auth-container  ${signUp ? "sign-up" : "login"}`}>
                <div className="background-panel z-10 shadow-md space-y-3">
                    <h3 className="text-black text-2xl font-bold text-center">{!signUp ? "Don't hava an account?" : "Login to existing account"}</h3>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <button onClick={toggleSignUp} className="w-48 bg-white text-black rounded-md shadow-md p-2 font-bold">{signUp ? "Login" : "Sign Up"}</button>
                        <button className="w-48 bg-white text-black rounded-md shadow-md p-2 font-bold flex items-center justify-center gap-2">
                            <FaGoogle className="" /> Login With Google
                        </button>
                    </div>
                </div>
                <form
                    onSubmit={handleLoginSignUp}
                    className={`absolute form-panel w-1/2 h-full items-center justify-center ${signUp ? "top-0 left-0" : "top-0 right-0"} flex flex-col items-center justify-center gap-3`}>
                    <div className={`text-4xl font-extrabold text-center text-black`}>
                        Count <span className="text-yellow-400">M</span>e
                    </div>
                    <input name="email" type="email" placeholder="email" className="w-80 border-black rounded-md shadow-md p-2" />
                    <input name="password" type="password" placeholder="password" className="w-80 border-black rounded-md shadow-md p-2" />
                    <button
                        type="submit"
                        className="w-32 bg-yellow-400 rounded-md shadow-md p-2 font-bold">{signUp ? "Sign Up" : "Login"}</button>
                </form>

            </div>
        </div>
    );
};

export default Auth;
