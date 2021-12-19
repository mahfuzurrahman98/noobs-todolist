import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ShowCompletedList(props) {
	if (props.tasks.length === 0) {
		return (
			<h3 className="text-danger text-center mt-3">No completed tasks!</h3>
		);
	} else {
		return (
			<>
				<ul className="mt-4 list-group">
					{props.tasks.map((value) => {
						return (
							<li
								className="xy list-group-item shadow fs-5 my-1 px-2 py-1 rounded"
								key={value.ts}
							>
								<div className="row">
									<div className="col me-auto">{value.val}</div>
									<div className="col-auto">
										<span
											className="text-danger"
											style={{ cursor: "pointer" }}
											onClick={() => {
												props._removeTask(value.ts);
											}}
										>
											<FontAwesomeIcon icon={faTrashAlt} />
										</span>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</>
		);
	}
}
