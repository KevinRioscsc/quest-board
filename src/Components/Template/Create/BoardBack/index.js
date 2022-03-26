import React, {useState} from 'react'
import {Box, Choices, ChoiceBox, Overlay} from './BoardBack'
import {BsCheckLg} from 'react-icons/bs'
import {RiTodoLine} from 'react-icons/ri'
import back1 from '../../../Images/back1.jpg'
import back2 from '../../../Images/back2.jpg'
import back3 from '../../../Images/back3.jpg'
import back4 from '../../../Images/back4.jpg'
import { useAuth } from '../../../Context/AuthContext'
import { Navigate } from 'react-router'



const arr = [back1, back2, back3, back4]
const BoardBack = () => {
    const [slected, setSelected] = useState()
    const [title, setTitle] = useState('')
    const [create, setCreate] = useState(false)
    const {setBoard, currentUser} = useAuth()

    const select = (url) => {
        setSelected(url)
    }
    const submit = (background, title) => {
        if(title){
            if(slected){

            fetch('https://quest--backend.herokuapp.com/createProject', {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    uid: JSON.stringify(currentUser.uid),
                    title:JSON.stringify(title),
                    url: JSON.stringify(background)
                })
            }).then(res => res.json()) 
            .then(id => {
               
                setBoard({
                    background: background,
                    title: title,
                    pid: id.pid
                })
                document.cookie = `pid=${id.pid}`
                setCreate(true)
            }) 
          
           
           
            
        }
    }else{
        console.log('outside')
    }
   
    }
  return (
    <div>
        <div className="flex">
        <Box url = {slected}>
            <RiTodoLine color='white' size={30}/>
            <RiTodoLine color='white' size={30}/>
            <RiTodoLine color='white' size={30}/>
        </Box>
        </div>
        <h6 className='mt-3'>Background</h6>
        <Choices>
            {
                arr.map((res, index) => {
                    return (
                    <div onClick={() => select(res)}>
                        <ChoiceBox photo = {res} >
                            <Overlay>
                                <BsCheckLg className='appear' color='white'/>
                            </Overlay>
                        </ChoiceBox>
                    </div>
                        )
                })
            }
        </Choices>
        
            <h6 className='mt-3'>Board Title</h6>
            <input className='custom' onChange={(e) => setTitle(e.target.value)} required type='text'/>
            <input type={'submit'} className = 'mt-3 btner' disabled={!title} value={'Create'} onClick = {() => submit(slected, title)}  />
        
        {
            create && <Navigate to={'/Board'}/>
        }
    </div>
  )
}

export default BoardBack