import React from 'react';

export default function TaskForm({ task, setTask }) {
  return (
    <>
      <div>
        <form>
          <label>Task:</label>
        </form>
        <input
          placeholder="put your task here"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
}
