import MainHeader from "../header/main-header"

const Search = () => {
    return (
        <div>
            <MainHeader />
            <div className = "searchBar">
                <input type = "text" placeholder = "Search..."></input>
             </div>
        </div>
    )
}

export default Search;