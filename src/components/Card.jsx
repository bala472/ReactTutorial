import React from 'react'

const Card = () => {
    const name = () => {
        return "Arun"
    }
  return (
    <div><h1>Welcome {name()} !!!</h1><button>Continue</button></div>
  )
}

export default Card