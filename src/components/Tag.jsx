import React from 'react'
import './Tag.css' 

const Tag = (props) => {
  return <button className='tag'>{props.TagName}</button>
}

export default Tag