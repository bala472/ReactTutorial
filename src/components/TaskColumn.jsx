import React from 'react'
import "./TaskColumn.css"

const TaskColumn = (props) => {
  return (
    <section className='task_column'>
        <h2 className='task_column_heading'><img className='task_column_icon' src={props.icon} alt="" />{props.tagName}</h2>
    </section>
  )
}

export default TaskColumn