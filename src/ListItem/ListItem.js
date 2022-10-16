import React from "react";
import "./ListItemStyles.scss"

export const ListItem = ({ title, description, imagePath }) => {
	return (
		<a href="#/test" className="list-item-element">
			<img src={imagePath} alt={title} />
			<div className="list-item-element-descripton-wrapper">
				<div className="list-item-element-description">
					<h3> {title} </h3>
					<p> {description} </p>
				</div>
			</div>
		</a>
	)
};

export default ListItem;