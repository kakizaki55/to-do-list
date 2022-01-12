import React from 'react';
import { useState } from 'react/cjs/react.development';
import TaskForm from '../../components/TaskForm/TaskForm';
import { createTaskItem } from '../../services/fetchData';

export default function TodoList() {
  const [task, setTask] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createTaskItem(task);

    console.log(data);
  };

  return (
    <div>
      <TaskForm task={task} setTask={setTask}></TaskForm>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}
