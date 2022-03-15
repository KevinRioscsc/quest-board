import React from 'react'
import {GrAdd} from 'react-icons/gr'
import './Board.css'

const NewBoard = ({onClick}) => {
  return (
    <div onClick={onClick}>
        <div className="box">
            <GrAdd size={40}/>
        </div>
    </div>
  )
}

export default NewBoard