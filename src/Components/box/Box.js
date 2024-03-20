import React from 'react'
import "./Box.css"

const Box = ({Value,id,onClick}) => {
  return (
    <div>
      <button className={`box ${Value === "X" ? "x" : "o" }`} key={id}  onClick={onClick}>{Value}</button>
    </div>
  )
}

export default Box
