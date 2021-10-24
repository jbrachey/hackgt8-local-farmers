import FarmPageHeader from "./header";
import axios from "axios";

export const getFarm = async (farmName) => {
    return axios.get(`http://localhost:8000/api/farms/get/${farmName}`)
        .then(res => {
            return res;
        }).catch(() => {
            window.location.href = 'http://localhost:3000/';
        });
}

const FarmPage = ({url}) => {
    const farmName = url.location.pathname.substring(1);
    const farm = getFarm(farmName);
    return (
        <div>
            <FarmPageHeader name={farm.name} phone={farm.phone}
                address={farm.address} city={farm.city} state={farm.state} zip={farm.zip}/>
        </div>
    );
}

export default FarmPage;