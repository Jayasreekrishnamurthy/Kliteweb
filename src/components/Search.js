import React from "react";
import "../search.css";

function Search({ searchInput, search, clearSearch, handleSearch }) {
    return (
        <header className="header">
            <div className="iconDiv">
                <img
                    src="https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png"
                    alt="Logo"
                    className="primeIcon"
                />
            </div>

            <div className="searchDiv">
                <input
                    id="Search"
                    className="search"
                    type="search"
                    onChange={searchInput}
                    onKeyPress={search}
                    onClick={clearSearch}
                    placeholder="Search the movie"
                />
                <button
                    className="searchButton"
                    onChange={searchInput}
                    onKeyPress={search}
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            <div className="loginDiv">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
                    alt="Login"
                    className="loginIcon"
                />
            </div>
        </header>
    );
}

export default Search;
