import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div className="error">
			<div className="text-danger h1">Nothing found!</div>
			<span className="h5">
				Go to your
				<Link className="ms-1" to="/mytasks">
					Tasks
				</Link>
			</span>
		</div>
	);
}
