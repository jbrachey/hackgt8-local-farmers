import { registerUser, isValidUserSubmission } from "./user-sign-up"
import './sign-up-style.css';
import React, { useState } from 'react';
import axios from 'axios';

const registerFarmAndFarmer = (farmName, farmUserName, farmAddress, farmCity,
    farmState, farmZip, farmInfo, farmSustainability, farmHours, phone, farmerName, email, password) => {
        console.log('registering!');
        registerUser(farmerName, email, password, 'producer');
        const location = {
            address: farmAddress,
            city: farmCity,
            state: farmState,
            zip: farmZip
        };
        const farm = {
            name: farmName,
            location: location,
            info: farmInfo,
            sustainability: farmSustainability,
            hours: farmHours,
            farmUserName: farmUserName,
            phone: phone
        };
        axios.post(`http://localhost:8000/api/farms/create`, farm)
        .then(res => {
            console.log(res);
            console.log(res.data);
        }).catch(err => {console.log(err)})
}

const isValidFarmUserName = (farmUserName) => {
    // should have api for this prob
    return true;
}

const isValidSubmission = (farmName, farmUserName, farmAddress, farmCity,
    farmState, farmZip, farmerName, email, password) => {
    if (farmName == null || farmName.trim() === '' || farmAddress == null || farmAddress.trim() === ''
        || farmCity == null || farmCity.trim() === '' || farmState == null || farmState.trim() === ''
        || farmZip == null || farmZip.trim().length !== 5 || !isValidUserSubmission(farmerName, email, password)
        || !isValidFarmUserName(farmUserName)) {
            return false;
        }
    return true;
}

export const FarmSignUp = () => {
    const [farmName, setFarmName] = useState('');
    const [farmUserName, setFarmUserName] = useState('');
    const [farmAddress, setFarmAddress] = useState('');
    const [farmCity, setFarmCity] = useState('');
    const [farmState, setFarmState] = useState('');
    const [farmZip, setFarmZip] = useState('');
    const [farmInfo, setFarmInfo] = useState('');
    const [farmSustainability, setFarmSustainability] = useState('');
    const [farmHours, setFarmHours] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSetFarmName = (event) => {
        setFarmName(event.target.value);
    }
    const handleSetFarmUserName = (event) => {
        setFarmUserName(event.target.value);
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
    const handleSetFarmInfo = (event) => {
        setFarmInfo(event.target.value);
    }
    const handleSetFarmSustainability = (event) => {
        setFarmSustainability(event.target.value);
    }
    const handleSetFarmHours = (event) => {
        setFarmHours(event.target.value);
    }
    const handleSetPhone = (event) => {
        setPhone(event.target.value);
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
                    Farm UserName:
                    <input className='inputBox' type='text' value={farmUserName} onChange={handleSetFarmUserName}/>
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
            <div className='textAreaLines'>
                <label>
                    Farm Info:
                    <textarea className='textAreaBox' type='text' value={farmInfo} onChange={handleSetFarmInfo}/>
                </label>
            </div>
            <br/>
            <div className='textAreaLines'>
                <label>
                    Farm Sustainability:
                    <textarea className='textAreaBox' type='text' value={farmSustainability} onChange={handleSetFarmSustainability}/>
                </label>
            </div>
            <br/>
            <div className='textAreaLines'>
                <label>
                    Farm Hours:
                    <textarea className='textAreaBox' type='text' value={farmHours} onChange={handleSetFarmHours}/>
                </label>
            </div>
            <div className='lines'>
                <label>
                    Farm Phone:
                    <input className='inputBox' type='text' value={phone} onChange={handleSetPhone}/>
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
                <button className={isValidSubmission(farmName, farmUserName, farmAddress, farmCity, 
                farmState, farmZip, name, email, password) ? 
                    'submitButton validSubmit' : 'submitButton invalidSubmit'} onClick={() => {
                    if (isValidSubmission(farmName, farmUserName, farmAddress, farmCity, 
                        farmState, farmZip, name, email, password)) {
                        registerFarmAndFarmer(farmName, farmUserName, farmAddress, farmCity, 
                            farmState, farmZip, name, email, password);
                    }
                }}>Submit</button>
            </div>
        </div>
    )
}