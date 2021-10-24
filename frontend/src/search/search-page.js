import MainHeader from "../header/main-header"
import { useState } from 'react';
import SearchResult from "./search-result";
import axios from 'axios';

const Search = () => {
    const [nameInput, setNameInput] = useState('');
    const [zipInput, setZipInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChangeInput = (isZip, name, zip) => {
        if (isZip) {
            axios.get(`http://localhost:8000/api/farms/getFromZip/${zip}`)
            .then(res => {
                console.log(res.data);
                setSearchResults(res.data);
            })
        } else {
            axios.get(`http://localhost:8000/api/farms/getFromName/${name}`)
            .then(res => {
                console.log(res.data);
                setSearchResults(res.data);
            })
        }
    }

    const handleChangeNameInput = (event) => {
        setNameInput(event.target.value);
        handleChangeInput(false, event.target.value, zipInput);
    }
    const handleChangeZipInput = (event) => {
        setZipInput(event.target.value);
        handleChangeInput(true, nameInput, event.target.value);
    }

    return (
        <div>
            <MainHeader />
            <div className = "searchBar">
                <input type = "text" value={nameInput} placeholder = "Enter Farm Name..." 
                    onChange={handleChangeNameInput}></input>
                <span>or...</span>
                <input type = "text" value={zipInput} placeholder = "Enter Zip Code..." 
                    onChange={handleChangeZipInput}></input>
                {((searchResults == undefined || searchResults.length === 0) ? (<div>
                    <span>Sorry, no results found!</span>
                </div>) : (<div>
                    {searchResults.map((farm) => {
                        return <li className='farmResult' onClick={() => {
                            window.location.href = `http://localhost:3000/farm/${farm.farmUserName}`;
                        }} key={farm.farmUserName}>
                            <SearchResult farmName={farm.name} farmUserName={farm.farmUserName} location={farm.location}/>
                        </li>
                    })}
                </div>))}
             </div>
        </div>
    )
}

export default Search;