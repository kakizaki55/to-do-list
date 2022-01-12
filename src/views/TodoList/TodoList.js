import React from 'react';
import { useState, useEffect } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm.js';
import {
  changeIsComplete,
  createTaskItem,
  deleteTask,
  fetchTaskList,
} from '../../services/fetchData.js';
import './TodoList.css';

export default function TodoList() {
  const [task, setTask] = useState();
  const [taskList, settaskList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTaskList();
      settaskList(data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTaskItem(task);
    setLoading(true);
    setTask('');
  };

  const handleToggle = async (task) => {
    await changeIsComplete(task.id, !task.is_complete);
    const updatedTaskList = taskList.map((item) =>
      item.id === task.id ? { ...task, is_complete: !task.is_complete } : item
    );
    settaskList(updatedTaskList);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    settaskList(taskList.filter((i) => i.id !== id));
  };

  return (
    <>
      <TaskForm task={task} setTask={setTask}></TaskForm>
      <button onClick={handleSubmit}>Add</button>
      <div className="task-list-box">
        {loading ? (
          <div>loading...</div>
        ) : (
          taskList.map((task) => {
            return (
              <>
                <div className="task-list">
                  <div key={task.id}>{task.task}</div>
                  <input
                    type="checkbox"
                    checked={task.is_complete}
                    onChange={() => handleToggle(task)}
                  ></input>
                  <button onClick={() => handleDelete(task.id)}>remove</button>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
}
