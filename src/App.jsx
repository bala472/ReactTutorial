import React from 'react'
import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import ToDoIcon from './assets/OIP.jpg'
import Doing from './assets/doing.png'
import Done from './assets/done.jpg'

const App = () => {
  return (
    <div className='app'>
      <TaskForm></TaskForm>
      <main className='app_main'>
       <TaskColumn tagName="ToDo" icon={ToDoIcon}></TaskColumn>
        <TaskColumn tagName="Doing" icon={Doing}></TaskColumn>
        <TaskColumn tagName="Done" icon={Done}></TaskColumn>
      </main>
    </div>
  )
}

export default App