import React from 'react'
import { Overlay, CreateTemplate, FirstSec, Title, X } from './Create'
import {FaRegWindowClose} from 'react-icons/fa'
import BoardBack from './BoardBack'
const Create = ({clicked, onClick}) => {
  return (
    <div>
        <Overlay clicked = {clicked}>
           <CreateTemplate clicked = {clicked}>
                <FirstSec>
                    <Title>Create Board</Title>
                    <X onClick={onClick}>
                        <FaRegWindowClose size={20}/>
                    </X>
                </FirstSec>
                <BoardBack/>
           </CreateTemplate>
        </Overlay>
    </div>
  )
}

export default Create