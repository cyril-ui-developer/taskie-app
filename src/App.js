import React, { useState } from "react";
import './App.css';
import TaskList from './components/TaskList'


const AddTaskForm = ({onAddTaskHandler })=> {
  const [formValues, setFormValues] = useState({ title: '', description: '' })

const handleOnInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

const submitTaskHandler = (event)=>{
    event.preventDefault()
    onAddTaskHandler(formValues)
    setFormValues({ title: '', description: '' })
 }

  return(
    <form className="form" onSubmit={submitTaskHandler}>
      <input
        type="text"
        name="title"
        value={formValues.title}
        id="title"
        placeholder="Enter title"
        onChange={handleOnInputChange}
      />
      <textarea
        name="description"
        value={formValues.description}
        id="description"
        rows="3"
        placeholder="Enter description"
        onChange={handleOnInputChange}
      ></textarea>
    <button className="submit" type="submit">Add Task</button>
  </form>
  )
}

function App() {
  const [tasks, setTasks] = useState([{ id: 1, title: "Task one", description: "This is task one..." }, { id: 2, title: "Task two", description: "This is task two.." }])


  const onAddTaskHandler = (formValues) => {
    const newTask = { ...formValues, id: tasks.length + 1 }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <div className="center">
     <h1>Parent and Child Components Communication - Task Manager App</h1 >
     </div>
     <div className="">
      <AddTaskForm onAddTaskHandler={onAddTaskHandler} />
    </div>
      <div className="">
      <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
