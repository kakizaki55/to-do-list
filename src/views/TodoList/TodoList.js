import React from 'react';
import { useState, useEffect } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm.js';
import { createTaskItem, fetchTaskList } from '../../services/fetchData.js';

export default function TodoList() {
  const [task, setTask] = useState();
  const [taskList, settaskList] = useState();
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTaskItem(task);
    setLoading(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTaskList();
      settaskList(data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        taskList.map((task) => {
          return (
            <>
              <div key={task.id}>{task.task}</div>
              <input type="checkbox" checked={true}></input>
            </>
          );
        })
      )}
      <TaskForm task={task} setTask={setTask}></TaskForm>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}
