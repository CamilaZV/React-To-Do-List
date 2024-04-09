import { useEffect, useState } from 'react';
import TaskTable from './Components/TaskTable';
import TaskCreator from './Components/TaskCreator';
import VisibilityControl from './Components/VisibilityControl';
import Container from './Components/Container';


function App() {
  
  const [taskItems, setTaskItems] = useState([]);
  const [showComplete, setShowComplete] = useState(false);

  useEffect(() => {
    // Del local storage trae el arreglo tasks y lo almacena en data
    let data = localStorage.getItem('tasks');
    if (data) {
      // Si existe el arreglo
      setTaskItems(JSON.parse(data)); //lo convierte a json y actualiza taskitem con ese arreglo
    }
  }, []); // Esto lo hace solo al iniciar la app

  useEffect(() => {
    //
    localStorage.setItem('tasks', JSON.stringify(taskItems)); // Convierte la tarea a formato string y la manda al localstorage
  }, [taskItems]); // Esto lo hace cada que cambia o se agrega una tarea

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName))
      setTaskItems([...taskItems, { name: taskName, done: false }]);
  };

  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done)); // Filtra las tareas que no estan hechas(elimina del arreglo las hechas)
    setShowComplete(false);
  };

  return (
    <main className="bg-secondary vh-100 text-white">
      <Container>
      <div className='bg-light text-black border border-dark text-center'><h2>TO DO LIST</h2></div><hr />
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />

        <VisibilityControl
          isChecked={showComplete}
          setShowComplete={(checked) => setShowComplete(checked)}
          cleanTasks={cleanTasks}
        />

        {showComplete === true && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showComplete={showComplete}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
