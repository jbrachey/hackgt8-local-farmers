import { registerUser, isValidUserSubmission } from "./user-sign-up"
import React, { useState } from 'react';

const registerFarmAndFarmer = (farmName, farmAddress, farmCity,
    farmState, farmZip, farmerName, email, password) => {
        registerUser(farmerName, email, password);

}

const isValidSubmission = (farmName, farmAddress, farmCity, farmState, farmZip, name, email, password) => {
    if (farmName == null || farmName.trim() === '' || farmAddress == null || farmAddress.trim() === ''
        || farmCity == null || farmCity.trim() === '' || farmState == null || farmState.trim() === ''
        || farmZip == null || farmZip.trim().length !== 5 || !isValidUserSubmission(name, email, password)) {
            return false;
        }
    return true;
}

export const FarmSignUp = () => {
    const [farmName, setFarmName] = useState('');
    const [farmAddress, setFarmAddress] = useState('');
    const [farmCity, setFarmCity] = useState('');
    const [farmState, setFarmState] = useState('');
    const [farmZip, setFarmZip] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSetFarmName = (event) => {
        setFarmName(event.target.value);
    }

    const handleSetFarmAddress = (event) => {
        setFarmAddress(event.target.value);
    }

    const handleSetFarmCity = (event) => {
        setFarmCity(event.target.value);
    }

    const handleSetFarmState = (event) => {
        setFarmState(event.target.value);
    }

    const handleSetFarmZip = (event) => {
        setFarmZip(event.target.value);
    }

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
                    Farm Name:
                    <input className='inputBox' type='text' value={farmName} onChange={handleSetFarmName}/>
                </label>
            </div>
            <div className='lines'>
                <label>
                    Farm Address:
                    <input className='inputBox' type='text' value={farmAddress} onChange={handleSetFarmAddress}/>
                </label>
            </div>
            <div className='lines'>
                <label>
                    Farm City:
                    <input className='inputBox' type='text' value={farmCity} onChange={handleSetFarmCity}/>
                </label>
            </div>
            <div className='lines'>
                <label>
                    Farm State:
                    <input className='inputBox' type='text' value={farmState} onChange={handleSetFarmState}/>
                </label>
            </div>
            <div className='lines'>
                <label>
                    Farm Zip Code:
                    <input className='inputBox' type='text' value={farmZip} onChange={handleSetFarmZip}/>
                </label>
            </div>
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
                <button className={isValidSubmission(farmName, farmAddress, farmCity, 
                farmState, farmZip, name, email, password) ? 
                    'submitButton validSubmit' : 'submitButton invalidSubmit'} onClick={() => {
                    if (isValidSubmission(farmName, farmAddress, farmCity, 
                        farmState, farmZip, name, email, password)) {
                        registerFarmAndFarmer(farmName, farmAddress, farmCity, farmState, farmZip, name, email, password);
                    }
                }}>Submit</button>
            </div>
        </div>
    )
}