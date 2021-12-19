import React, { useEffect, useState } from "react";
import ShowCompletedList from "./ShowCompletedList";

export default function CompletedTasks() {
	const [completedTaskList, setCompletedTaskList] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("complete")) {
			const newCompletedTaskList = JSON.parse(localStorage.getItem("complete"));
			setCompletedTaskList(newCompletedTaskList);
		} else {
			localStorage.setItem("complete", JSON.stringify([]));
		}
	}, []);

	const removeTask = (timeStamp) => {
		const newTaskList = completedTaskList.filter((value) => {
			return timeStamp !== value.ts;
		});
		setCompletedTaskList(newTaskList);
		localStorage.setItem("complete", JSON.stringify(newTaskList));
	};

	return (
		<>
			<ShowCompletedList tasks={completedTaskList} _removeTask={removeTask} />
		</>
	);
}
