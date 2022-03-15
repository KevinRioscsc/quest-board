import React, {useState, useEffect} from 'react'
import {IoMdAdd} from 'react-icons/io'
import {ListContainer, ListItems, Input, InputList, Button, Submit} from './List'
import {ImCross} from 'react-icons/im'
import { useAuth } from '../../Context/AuthContext'

const AddList = ({setArr, pid}) => {
    const [title, setTitle] = useState('')
    const {currentUser} = useAuth()
    const [toggle, setToggle]= useState(false)
    const [card, setCard] = useState({title:title})

    const submitList = () => {
        if(title){
            fetch(' https://fathomless-tor-67298.herokuapp.com/createList', {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    pid: JSON.stringify(pid),
                    title:JSON.stringify(title)
                })
            }).then(res => res.json()) 
            .then(id => {
                setArr(cards => [...cards, {
                    lid:id.lid,
                    title:title
                }])
                setTitle('')
            })
            
        }
    }
    
  return (
    <div>
        <ListContainer>
            <ListItems toggle = {toggle} onClick={() => setToggle(!toggle)}>
                <IoMdAdd size={20} />
                <h5>Add list</h5>
            </ListItems>
            <InputList toggle = {toggle}>
                <Input value={title} type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Enter List Title...' />
                <Submit>
                    <Button onClick={submitList}>Add List</Button>
                    <ImCross className='hover' onClick={() => setToggle(!toggle)}/>
                </Submit>
                {console.log(title)}
            </InputList>
        </ListContainer>
    </div>
  )
}

export default AddList