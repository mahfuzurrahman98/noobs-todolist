import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ShowList(props) {
	if (props.tasks.length === 0) {
		return <h3 className="text-danger text-center mt-5">No pending tasks!</h3>;
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
									<div
										className="col-auto text-success"
										style={{ cursor: "pointer" }}
										onClick={() => {
											props._completeTask(value.ts);
										}}
									>
										<FontAwesomeIcon icon={faCheckCircle} />
									</div>
									<div className="col me-auto">{value.val}</div>
									<div className="col-auto">
										<span
											className="text-primary me-3"
											style={{ cursor: "pointer" }}
											onClick={() => {
												props._editTask(value.ts);
											}}
										>
											<FontAwesomeIcon icon={faEdit} />
										</span>
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
