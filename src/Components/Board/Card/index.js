import React, {useState, useEffect} from 'react'
import { Title, H5, ListItems, InputList, Input, Submit,Button, CardContainer, WordDiv, P } from './Card'
import {ImCross} from 'react-icons/im'
import {IoMdAdd} from 'react-icons/io'
import {BiTrashAlt} from 'react-icons/bi'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const Card = ({title, lid, help_index, dataCard, lists, setLists}) => {
    const [toggle, setToggle] = useState(false)
    const [titleNew, setTitle] = useState('')
    const [submit, setSubmit] = useState(false)

    const submitList = () => {
        if(title){ 
            fetch('https://quest--backend.herokuapp.com/createCard', {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    lid: lid,
                    titlecard:titleNew
                })
            }).then(res => res.json()) 
            .then(id => {

                dataCard.push({
                    lid:lid,
                    title: title,
                    cid:id.cid,
                    titlecard:titleNew
     
                })   
                setSubmit(true)
                setTitle('')
            })
            
        }
        
    }
    
    useEffect(() => {
        setSubmit(false)
    }, [submit])

    const deleteCard = (cid) => {
        fetch('https://quest--backend.herokuapp.com/delCard', {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                cid: JSON.stringify(cid)
            })
        }).then(res => res.json()) 
        setLists(
            lists.map((item) => 
                item.lid === lid
                    ?{
                        ...item,
                        datacard:dataCard.filter((item) => item.cid !== cid)
                    }
                    :{
                        ...item
                    }
            )
        )
                }
    
    
  return (
      
    <div>
       <Droppable droppableId={`${help_index}`} key= {help_index} direction={'vertical'} type={'item'} >
                {  
                    (provided) => (
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    >     
                        <CardContainer onClick={() => console.log('clicked on List:', help_index)} 
                       >
                            <Title>
                                <H5>{title}</H5>
                            </Title>
                            {       
                                dataCard.map((item, index) => {
                                    return (
                                        <Draggable draggableId={`${item.cid}`} index = {index} key={item.cid} >
                                            {
                                            (provided) => (
                                                <WordDiv 
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                >
                                                <P>{item.titlecard}</P>
                                                    <div className="icon">
                                                    <BiTrashAlt onClick={() => deleteCard(item.cid)} className='hover'/>
                                                                                        
                                                    </div>   
                                                </WordDiv>
                                                        )
                                                    }
                                                                        
                                        </Draggable>
                                    )
                                })
                            }
                            {provided.placeholder}
                            <ListItems toggle = {toggle} onClick={() => setToggle(!toggle)} >
                                    <IoMdAdd size={20} />
                                    <h5>Add a card</h5>
                            </ListItems>
                                <InputList toggle={toggle}>
                                    <Input type="text" value={titleNew} onChange={(e) => setTitle(e.target.value)} placeholder='Enter title for this card...' />
                                    <Submit>
                                        <Button onClick={submitList} >Add List</Button>
                                        <ImCross onClick={() => setToggle(!toggle)} className= 'hover' />
                                    </Submit>
                                </InputList>
                            
                        </CardContainer>
                        </div>
            
                    )
                }
        </Droppable>
       
    </div>
  )
}

export default Card