import React from 'react';
import { useState, useEffect } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm.js';
import {
  changeIsComplete,
  createTaskItem,
  deleteTask,
  fetchTaskList,
} from '../../services/fetchData.js';

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
    const taskdata = await fetchTaskList();
    settaskList(taskdata);
  };

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        taskList.map((task) => {
          return (
            <>
              <div key={task.id}>{task.task}</div>
              <input
                type="checkbox"
                checked={task.is_complete}
                onChange={() => handleToggle(task)}
              ></input>
              <button onClick={() => handleDelete(task.id)}>remove task</button>
            </>
          );
        })
      )}
      <TaskForm task={task} setTask={setTask}></TaskForm>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}
