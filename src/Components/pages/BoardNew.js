import React from 'react'
import Board from '../Board'
import NavBar from '../Template/NavBar'
import { useAuth } from '../Context/AuthContext'


const BoardNew = () => {
  const {currentUser} = useAuth()
  return (
    <div>
      <NavBar  profilePic = {currentUser.photoURL} name = {currentUser.displayName} />
      <Board/>
    </div>
  )
}

export default BoardNew