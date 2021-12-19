import React from "react";

export default function About() {
	return (
		<div className="mx-2">
			<h2 className="text-danger">Greetings from Mahfuz.</h2>
			<br />
			<p className="fs-4">
				This is a fully functional Todo App using React Js. You can add, edit,
				and delete tasks. Also can mark the tasks you have completed which will
				be stored on the completed tasks page. The task also can be sorted
				according to the date added and alphabetical order.
			</p>
			<p className="fs-5">
				The code can be found on my{" "}
				<a href="https://github.com/mahfuzurrahman98">Github</a>
			</p>
		</div>
	);
}
