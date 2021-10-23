import '../styles/header-style.css';

const FarmPageHeader = ({name, phone, address, city, state, zip}) => {
    return (
        <div className='header'>
            <span className='title'>{name}</span>
            <br/>
            <span>{phone} {address} {city}, {state} {zip}</span>
        </div>
    );
}

export default FarmPageHeader;