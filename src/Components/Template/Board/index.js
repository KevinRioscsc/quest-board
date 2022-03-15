import React, { useState } from 'react'
import { BoardWork, Title, Overlay } from './Board'
import background from '../../Images/download.jfif'
import { useAuth } from '../../Context/AuthContext'
import { Navigate } from 'react-router'
const Board = ({photoUrl, title, pid}) => {
    const {setBoard} = useAuth()
    const [create, setCreate] = useState(false)

    const toDo = () => {
        
        setBoard({
            background:photoUrl,
            title:title,
            pid:pid

        })
        console.log(pid)
        document.cookie = `pid=${pid}`
        setCreate(true)
    }
  return (
    <div onClick={toDo}>
        <BoardWork photo = {photoUrl}>
            <Overlay>
                <Title>{title.replaceAll('"', '')}</Title>
            </Overlay>
        </BoardWork>
        {
            create && <Navigate to={'/Board'}/>
        }
    </div>
  )
}

export default Board