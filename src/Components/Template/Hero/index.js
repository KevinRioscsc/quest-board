import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {Width, User, H5, WorkSpace} from './Hero'

const Hero = ({children}) => {
  return (
    <div>
        <Width>
            <User>
                <AiOutlineUser/>
                <H5>Workspace Boards</H5>
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