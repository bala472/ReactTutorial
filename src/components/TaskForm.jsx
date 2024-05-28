import React from 'react'

import "./TaskForm.css"
import Tag from './Tag.jsx';

const TaskForm = () => {
  return (
    <header className='app_header'>
        <form>
        <input type="text" placeholder='Enter your task' className='task_input'/>
        <div className='task_form'>
            <div className='task_form_buttons'>
              <Tag TagName="HTML"/>
              <Tag TagName="CSS"/>
              <Tag TagName="JavaScript"/>
              <Tag TagName="React"/> 
            </div>
        <div className='task_form_submit'>
        <select >
            <option value="todo" >To Do</option>
            <option value="doing">Doing</option>
            <option value="done">done</option>
        </select>
        <button className='task_button'>+ Add Task</button>
        </div>
        </div>
        </form>
    </header>
  )
}

export default TaskForm