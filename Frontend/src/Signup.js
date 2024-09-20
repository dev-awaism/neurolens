import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Validation from "./Validation";
import axios from 'axios'

function Form() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setphone] = useState("")
    const [FLname, setFLname] = useState("")

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleFLname = (e) => {
        setFLname(e.target.value);
    }

    const handlephone = (e) => {
        setphone(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(Validation(values));


        const newErrors = {};
        if (!name) {
            newErrors.name = "Username is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }
        if (!FLname) {
            newErrors.FLname = "Full Name is required";
        }
        if (!phone) {
            newErrors.phone = "phone number is required";
        }
        else if (password.length < 8) {
            newErrors.password = "";
            window.alert("Password should be atleast 8 digits with one uppercase alphabet")
        }
        else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            newErrors.password = "";
            window.alert("There should be one Upper Case letter")
        }

        if (Object.keys(newErrors).length === 0) {
            navigate("/Form");
            axios.post('http://localhost:8000/emp/create', { empName: name, empPassword: password, empFLname: FLname, empPhone: phone })
                .then(result => console.log(result))
                .catch(err => console.log(err))
        }

        setErrors(newErrors);


    }

    console.log({ name,FLname,phone, password });

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit} >
                <h1 className="header">Create New Account </h1>
                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type="text"
                        autoComplete="off"
                        name="name"
                        id="username"
                        onChange={handleName}
                        
                        // required
                        placeholder="Email"
                        autoComplete="new-email"
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    <br />

                    <label>Full Name</label>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Username"
                        name="Full name"
                        id="Full name"
                        onChange={handleFLname}
                        required
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    <br />

                    <label>Contact Number</label>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Contact Number"
                        name="contact"
                        id="number"
                        onChange={handlephone}
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
                        placeholder="Password"
                        autoComplete="new-password"
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                    <br />
                </div>
                <br />
                <button type="submit" >Submit</button>
                <div className="sign_path">
                    <Link to='/Form'>
                        Already have an Account? LogIn to Existing Account
                    </Link>

                </div>
            </form>

        </div>

    );
}

export default Form
// Updated on Sun Jul  6 12:57:27 CDT 2025
