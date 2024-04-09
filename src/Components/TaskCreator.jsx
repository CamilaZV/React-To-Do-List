import { useState } from 'react';

function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    if (newTaskName.trim() === '') {
      alert('Please write a task!');
      return;
    }
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName('');
  };

  return (
    <div className="d-flex justify-content-between bg-dark text-white p-2 border-secondary">
      <form className="my-2 row" onSubmit={handleSubmit}>
        <div className="col-9">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new task..."
            autoFocus
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
        </div>
        <div className="col-3 p-0 d-flex align-items-center">
          <button className="btn btn-primary btn-sm" type="submit">
            Save task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskCreator;
