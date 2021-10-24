import axios from "axios";
import MainHeader from "../header/main-header";
import { useState, useEffect } from 'react';
import './main-farm-page-style.css';

export const getFarm = async (farmName) => {
    return axios.get(`http://localhost:8000/api/farms/getInfo/${farmName}`)
        .then(res => {
            return res;
        }).catch(() => {
            window.location.href = 'http://localhost:3000/error';
        });
}

const FarmPage = ({url}) => {
    const farmName = url.location.pathname.substring(6);
    const [farm, setFarm] = useState(null);
    useEffect(async () => {
        const farm = await getFarm(farmName);
        setFarm(farm.data);
    }, []);
    if (farm == null) {
        return (
            <div></div>
        )
    }
    return (
        <div>
            <MainHeader />
            <div className = "farmPage farmPageInfo">
                <div className = "nameFarmPage">
                    <label>{farm.name}</label>
                </div>
                <div className = "phonelocationFarmPage">
                    <label>{farm.phone}</label>
                    {farm.location.address}, {farm.location.city}, {farm.location.state}, {farm.location.zip}
                </div>
                <div className = "infoFPContain">
                    <label className = "infoFP">Additional info: </label>
                    {farm.info}
                </div>
                <div className = "sustainFPContain">
                    <label className = "sustainFP">What do you do for sustainability? </label>
                    {farm.sustainability}
                </div>
                <div className = "hoursFPContain">
                    <label className = "hoursFP">What are your hours? </label>
                    {farm.hours}
                </div>
                <div>
                    {true ? (<button className = "subButton">Follow</button>) : (<button className = "alreadyFollowed">Followed<div id = "tick-mark"></div></button>)}
                </div>
            </div>
        </div>
    );
}

export default FarmPage;