import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {Width, User, H5, WorkSpace} from './Hero'

const Hero = ({children}) => {
  return (
    <div >
        <Width>
            <User>
                <AiOutlineUser size={25} color='white'/>
                <H5>Your Quests</H5>
            </User>
            <WorkSpace>
            {
                    children
            }
            </WorkSpace>
        </Width>
    </div>
  )
}

export default Hero