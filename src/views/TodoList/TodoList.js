import React from 'react';
import { useState } from 'react/cjs/react.development';
import TaskForm from '../../components/TaskForm/TaskForm';

export default function TodoList() {
  const [task, setTask] = useState();

  return (
    <div>
      <TaskForm task={task} setTask={setTask}></TaskForm>
    </div>
  );
}
