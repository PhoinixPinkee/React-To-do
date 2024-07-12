import React ,{useState, useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import Doicon from '../src/assets/direct-hit.png'
import Doingicon from '../src/assets/glowing-star.png'
import Doneicon from '../src/assets/check-mark-button.png'
const oldTask=localStorage.getItem("tasks");
console.log(oldTask)
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
  useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks)) }, [tasks]);
  
  const handleDelete=(taskIndex)=>{
                   const newTAsk= tasks.filter((task,index)  => index!=taskIndex)
                   setTasks(newTAsk)
  }
  return (
    <div className='app'>
   
      <h1 style="text-align:center;margin-top:40px;color:#6457f9;font-style:bold;">Placement Prepration To Do List </h1>
   <TaskForm setTasks={setTasks}/>
      <main className="app_main">
        <TaskColumn title="To do"  icon={Doicon} tasks={tasks} status ='todo' handleDelete={handleDelete} />
        <TaskColumn title="Doing" icon={Doneicon} tasks={tasks} status ='doing' handleDelete={handleDelete} />
        <TaskColumn title="Done"  icon={Doingicon} tasks={tasks} status ='done'handleDelete={handleDelete}  />
      </main>
    </div>
  )
}

export default App;
