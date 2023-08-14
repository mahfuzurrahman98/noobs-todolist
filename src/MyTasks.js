import { faBookmark, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ShowList from './ShowList.js';

export default function MyTasks() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [add, setAdd] = useState(true);
  const [curEdit, setCurEdit] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('todo')) {
      const newTaskList = JSON.parse(localStorage.getItem('todo'));
      setTaskList(newTaskList);
    } else {
      localStorage.setItem('todo', JSON.stringify([]));
    }

    if (localStorage.getItem('complete')) {
      const newCompletedTaskList = JSON.parse(localStorage.getItem('complete'));
      setCompletedTaskList(newCompletedTaskList);
    } else {
      localStorage.setItem('complete', JSON.stringify([]));
    }
  }, []);

  const addTask = () => {
    if (!task.trim()) {
      setEmpty(true);
    } else {
      setEmpty(false);
      const curTimestamp = new Date().getTime();
      const newTaskList = [...taskList, { ts: curTimestamp, val: task.trim() }];
      setTaskList(newTaskList);
      localStorage.setItem('todo', JSON.stringify(newTaskList));
      setTask('');
    }
  };

  const editTask = (timeStamp) => {
    setAdd(false);
    setCurEdit(timeStamp);
    const curTask = taskList.find((e) => e.ts === timeStamp);
    setTask(curTask.val);
  };

  const removeTask = (timeStamp) => {
    const newTaskList = taskList.filter((value) => {
      return timeStamp !== value.ts;
    });
    setTaskList(newTaskList);
    localStorage.setItem('todo', JSON.stringify(newTaskList));
  };

  const completeTask = (timeStamp) => {
    const curTask = taskList.find((e) => e.ts === timeStamp);
    const newCompletedTaskList = [...completedTaskList, curTask];
    setCompletedTaskList(newCompletedTaskList);
    localStorage.setItem('complete', JSON.stringify(newCompletedTaskList));
    removeTask(timeStamp);
  };

  const setEditedTask = () => {
    if (!task.trim()) {
      setEmpty(true);
    } else {
      const newTaskList = [...taskList];
      const curId = newTaskList.findIndex((e) => e.ts === curEdit);
      newTaskList[curId].val = task;
      setTask('');
      setTaskList(newTaskList);
      localStorage.setItem('todo', JSON.stringify(newTaskList));
    }
  };

  const sortBy = (param) => {
    let arr = JSON.parse(localStorage.getItem('todo'));
    if (param === 'date') {
      arr = arr.sort((x, y) => (x.ts < y.ts ? -1 : 1));
    } else {
      arr = arr.sort((x, y) => (x.val < y.val ? -1 : 1));
    }
    setTaskList(arr);
  };

  const renderButton = () => {
    if (add) {
      return (
        <span
          className="text-success"
          style={{ cursor: 'pointer' }}
          onClick={addTask}
        >
          <FontAwesomeIcon icon={faBookmark} className="fa-2x" />
        </span>
      );
    } else {
      return (
        <span
          className="text-success"
          style={{ cursor: 'pointer' }}
          onClick={setEditedTask}
        >
          <FontAwesomeIcon icon={faCheckCircle} className="fa-2x" />
        </span>
      );
    }
  };

  return (
    <>
      {empty && (
        <div
          className="alert alert-warning p-2 mb-3 rounded text-center"
          onClick={() => {
            setEmpty(false);
          }}
        >
          Empty field
        </div>
      )}
      <div className="row">
        <div className="col-auto">
          <div className="dropdown">
            <span
              className="btn btn-secondary"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faSort} />
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li className="dropdown-item text-muted fw-bold">Sort By</li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    sortBy('date');
                  }}
                >
                  Date
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    sortBy('alpha');
                  }}
                >
                  A-Z
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col mx-auto">
          <input
            className="form-control bg-dark text-light"
            type="text"
            placeholder="Write a new task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <div className="col-auto">{renderButton()}</div>
      </div>
      <ShowList
        tasks={taskList}
        setTasks={setTaskList}
        _editTask={editTask}
        _removeTask={removeTask}
        _completeTask={completeTask}
      />
    </>
  );
}
