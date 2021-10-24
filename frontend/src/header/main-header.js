import './header-style.css';
import home from './homeButton.svg';
import search from './searchButton.svg';

const MainHeader = () => {
    return (
        <div>
            <div className = "ButtonIcons">
                <button className = "buttonHome" onClick={() => {
                    window.location.href = 'http://localhost:3000/';
                }}>
                    <img src = {home} alt = 'homeButton' className = "homeButton"/>
                </button>
                <button className = "buttonSearch" onClick={() => {
                    window.location.href = 'http://localhost:3000/search/';
                }}>
                    <img src = {search} alt = 'searchButton' className = "searchButton"/>
                </button>
            </div>
        </div>
    );
}

export default MainHeader;