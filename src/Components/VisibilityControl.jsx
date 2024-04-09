function VisibilityControl({ isChecked, setShowComplete, cleanTasks }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it?')) {
      cleanTasks();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-dark text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowComplete(e.target.checked)}
        />{' '}
      </div>
      <label>Show tasks done</label>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Delete
      </button>
    </div>
  );
}

export default VisibilityControl;
