import TaskRow from './TaskRow';

function TaskTable({ tasks, toggleTask, showComplete = false }) {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <table className='table table-light table-striped table-bordered border-dark'>
      <thead>
        <tr className='table-primary border-dark'>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showComplete)}</tbody>
    </table>
  );
}

export default TaskTable;
