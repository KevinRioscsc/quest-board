import React, {useState, useEffect} from 'react'
import { Title, H5, ListItems, InputList, Input, Submit,Button, CardContainer, WordDiv, P } from './Card'
import {ImCross} from 'react-icons/im'
import {IoMdAdd} from 'react-icons/io'
import {BiTrashAlt} from 'react-icons/bi'
import {GrEdit} from 'react-icons/gr'

const Card = ({title, lid}) => {
    const [toggle, setToggle] = useState(false)
    const [titleNew, setTitle] = useState('')
    const [arr, setArr] = useState([])
    const [submit, setSubmit] = useState(false)
    const [selected, setSelect] = useState(null)
    const submitList = () => {
        if(title){
            fetch(' https://fathomless-tor-67298.herokuapp.com/createCard', {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    lid: JSON.stringify(lid),
                    title:JSON.stringify(titleNew)
                })
            }).then(res => res.json()) 
            .then(id => {
                setArr(cards => [...cards, {
                    lid: `${lid}`,
                    cid:id.cid,
                    title:titleNew
    
                }])

                setSubmit(true)
                setTitle('')
            })
            
        }
        
    }
    const getData = () => {
        fetch(' https://fathomless-tor-67298.herokuapp.com/getCard', {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                lid: JSON.stringify(lid)
            })
        }).then(res => res.json()) 
        .then(data => {
            setArr(data)
        })
    }
    useEffect(() => {
        if(lid !== null ){
            getData()
        }
        setSubmit(false)
       console.log('useEffect for Card')
    }, [])

    const deleteCard = (cid) => {
        fetch(' https://fathomless-tor-67298.herokuapp.com/delCard', {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                cid: JSON.stringify(cid)
            })
        }).then(res => res.json()) 
        console.log(cid)
        setSelect(cid)
        setArr( arr.filter((item) => item.cid !== cid));
        console.log('this is the filtered arr',arr ,  cid)
    }
    
    
  return (
    <div>
        <CardContainer>
            <Title>
                <H5>{title.replaceAll('"','')}</H5>
            </Title>
          
           
            {       
                arr.map((item, index) => {
                    console.log('arr in filter',item)
                    return (
                      
                        <WordDiv >
                            <P>{item.title.replaceAll('"','')}</P>
                            <div className="icon">
                                <BiTrashAlt onClick={() => deleteCard(item.cid)} className='hover'/>
                                
                            </div>   
                        </WordDiv>
                    )
                })
            }
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

export default Card