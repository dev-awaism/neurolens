import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import axios from 'axios'; // Import axios

function Form() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!name) {
            newErrors.name = "Username is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/emp/login', {
                empName: name,
                empPassword: password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("sent to backend");

            if (response.status === 200) {
                // Login successful, navigate to Home or handle as needed
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', name);

                navigate("/Home");
            }
        } catch (error) {
            if (error.response) {
                console.log('Error:', error.response.data);
                window.alert("Incorrect Username or Password")
                // Handle error states, e.g., setErrors, show error messages, etc.
            }
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="header">Login </h1>
                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type="text"
                        autoComplete="off"
                        name="name"
                        id="username"
                        onChange={handleName}
                        required
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    <br />
                </div>
                <div>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="password"
                        onChange={handlePassword}
                        required
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                    <br />
                </div>
                <br />
                <button type="submit">Submit</button>

                <div className="sign_path">
                    <Link to='/Signup'>
                        Don't have an Account? Create Account
                    </Link>
                </div>
            </form>

        </div>
    );
}

export default Form;

// Updated on Sun Jul  6 12:57:27 CDT 2025
