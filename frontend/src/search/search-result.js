import './search-style.css';
const SearchResult = ({farmName, location}) => {
    return (
        <div className = "searchResult">
            <button className = "searchResultButton">
            <h1 className='farmName'>{farmName}</h1>
            <h3 className = "farmAddress">{location.address}</h3>
            <h3 className = "farmCity">{location.city}</h3>
            <h3 className = "farmState">{location.state}</h3>
            <h3 className = "farmZip">{location.zip}</h3>
            </button>
            <body className = "bodySearchResult"></body>
        </div>
    )
}
export default SearchResult;