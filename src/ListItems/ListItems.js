import React from "react";
import { gridItemsData } from "../data/grid-items"
import ListItem from "../ListItem/ListItem"
import "./ListItemsContainerStyles.scss"

export const ListItems = (props) => {

	const filteredData = gridItemsData.filter((el) => {
		//if input empty return the original
		if (props.input === '') {
			return el;
		}
		//return the item which contains input value
		else {
			return el.title.toLowerCase().includes(props.input)
		}
	});

	const noResults = () => {
		return (
			<div className="list-tiem-no-results">
				<h2>No results found</h2>
			</div>
		)
	}

	return (
		<div className="list-items-container">
			{filteredData.length
				? filteredData.map((data, key) => {
					return (
						<ListItem
							title={data.title}
							description={data.description}
							imagePath={data.imagePath}
							key={key}
						/>
					);
				})
				: noResults()
			}
		</div>
	)
}

export default ListItems;