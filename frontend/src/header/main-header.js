import './header-style.css';
import home from './homeButton.svg';
import search from './searchButton.svg';

const MainHeader = () => {
    return (
        <div>
            <div className = "ButtonIcons">
                <button className = "buttonHome">
                    <img src = {home} alt = 'homeButton' className = "homeButton"/>
                </button>
                <button className = "buttonSearch">
                    <img src = {search} alt = 'searchButton' className = "searchButton"/>
                </button>
            </div>
        </div>
    );
}

export default MainHeader;