import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="mb-3">
			<ul className="nav nav-pills justify-content-end">
				<li className="nav-item">
					<Link to="/add-contact">
						<button className="btn btn-success">Add new contact</button>
					</Link>
				</li>
			</ul>	
		</div>
		
	);
};
