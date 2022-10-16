import React from "react";
import "./SearchStyles.scss"

export const Search = ({ inputHandler, buttonHandler, message }) => {
	return (
		<div className="search container">
			<label htmlFor="search-input">Search here:</label>
			<input type="text" id="search-input" onChange={inputHandler} placeholder="Search for element..." value={message} />
			<button onClick={buttonHandler}>Clear</button>
		</div>
	)
}

export default Search;