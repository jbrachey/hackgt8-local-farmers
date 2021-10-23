import React, { useState } from 'react';
import axios from 'axios';
import './sign-up-style.css';

export const registerUser = (name, email, password) => {
    // add user to backend db
    const user = {
        name: name, 
        email: email,
        password: password
    };

    axios.post(`http://localhost:8000/api/users/create`, user)
        .then(res => {
            console.log(res);
            console.log(res.data);
            /*
            axios.get(`http://localhost:8000/api/users/get`)
                .then(asdf => {
                    console.log(asdf);
                })
                */
        })
}

export const isValidUserSubmission = (name, email, password) => {
    if (email == null || email.trim() === '' || !email.includes('@') || email.indexOf('@') === 0 
        || email.indexOf('@') === email.length - 1 || !email.includes('.') || name == null 
        || name.trim() === '' || password == null || password.trim() === '' || password.length < 5) {
        return false;
    }
    return true;
}

export const UserSignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSetName = (event) => {
        setName(event.target.value);
    }

    const handleSetEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSetPassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className='form'>
            <h3>Create your account!</h3>
            <div className='lines'>
                <label>
                    Name:
                    <input className='inputBox' type='text' value={name} onChange={handleSetName}/>
                </label>
            </div>
            <div className='lines'>
                <label>
                    Email:
                    <input className='inputBox' type='text' value={email} onChange={handleSetEmail}/>
                </label>
            </div>
            <div className='lines'>
                <label>
                    Password:
                    <input className='inputBox' type='text' value={password} onChange={handleSetPassword}/>
                </label>
            </div>
            <div className='buttonLine'>
                <button className={isValidUserSubmission(name, email, password) ? 
                    'submitButton validSubmit' : 'submitButton invalidSubmit'} onClick={() => {
                    //if (isValidUserSubmission(name, email, password)) {
                        registerUser(name, email, password);
                    //}
                }}>Submit</button>
            </div>
        </div>
    )
}

