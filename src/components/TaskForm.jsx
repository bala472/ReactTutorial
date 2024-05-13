import React from 'react'

const TaskForm = () => {
  return (
    <header className='app_header'>
        <form>
        <input type="text" placeholder='Enter Task' className='task_input'/>
        <div className='task_form'>
            <div className='task_form_buttons'>
            <button className='tag'>Html</button>
            <button className='tag'>Css</button>
            <button className='tag'>JavaScript</button>
            <button className='tag'>Java</button>
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