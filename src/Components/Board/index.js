import React, {useState, useEffect} from 'react'
import { useAuth } from '../Context/AuthContext'
import { Back } from './Board'
import AddList from './AddList'
import { BallTriangle } from 'react-loader-spinner';
import Card from './Card'
import {DragDropContext} from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd';


const Board = () => {
    const {Board, currentUser} = useAuth()
    const [create, setCreate] = useState(false)
    const [loading, setLoading] = useState(false)
    const [board, setBoard] = useState({
        pid: Board.pid,
        background: Board.background,
        title: Board.title
    })
    const [arr, setArr] = useState([{
        lid: null,
        title: ''
    }])
    const getPID = () => {
        let cookie = {};
            document.cookie.split(';').forEach(function(el) {
                let [k,v] = el.split('=');
                cookie[k.trim()] = v;
            })
            return cookie['pid'];
    }
    const getProject = () => {
        fetch('https://quest--backend.herokuapp.com/getProject', {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                pid: JSON.stringify(parseInt(getPID()))
            })
        }).then(res => res.json()) 
        .then(data => {
            console.log(data)
            setBoard({
                pid: data[0].pid,
                background: data[0].url,
                title: data[0].title
            })
           
        })
    
    }
    
    const getData = () => {
        fetch('https://quest--backend.herokuapp.com/getList', {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                pid: JSON.stringify(Board.pid ? Board.pid : parseInt(getPID()))
            })
        }).then(res => res.json()) 
        .then(data => {
            console.log(data)
            setArr(data)
            setLoading(true)
        })
    }
    useEffect(() => {
        
        getProject()
        getData()
       
    }, [])
  return (
      <DragDropContext>
        <Back url = {Board.background ? Board.background : board.background}>
            <div className="space">
                <div className="projectName">
                    <h1 className='projectTitle margin'>{Board.title ? Board.title.replaceAll('"', '') : board.title.replaceAll('"', '')}</h1>
                </div>
            </div>
            
            <div className="space overflow">
            { loading
                ?
                <div className="cards">
                        {
                        
                            arr.map((item, index) => {
                                return (
                                    <Droppable droppableId={`List ${index}`} key={index}>
                                    {  
                                        (provided) => (
                                            <div className=""  ref={provided.innerRef}
                                            {...provided.droppableProps}>
                                                <Card key={index} help_index = {index}  title={item.title} lid = {item.lid}/>
                                                {provided.placeholder}
                                            </div>
                                            
                                        )
                                    }
                                   
                                </Droppable>
                                )
                            })
                        }
                    <AddList pid = {Board.pid} setArr = {setArr}/>
                    
                </div>
                :
                <div className="ball">
                    <BallTriangle  color='#6a11cb' height= '80' width='80' ariaLabel='loading'/>
                </div>
            }
                
            </div>
        </Back>
    </DragDropContext>
  )
}

export default Board