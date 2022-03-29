import React, {useState, useEffect} from 'react'
import { useAuth } from '../Context/AuthContext'
import { Back } from './Board'
import AddList from './AddList'
import { BallTriangle } from 'react-loader-spinner';
import Card from './Card'
import {DragDropContext} from 'react-beautiful-dnd'
import { reorderCards } from './reorder';

const Board = () => {
    const {Board} = useAuth()
    const [loading, setLoading] = useState(false)
    const [board, setBoard] = useState({
        pid: Board.pid,
        background: Board.background,
        title: Board.title
    })
    const [lists, setLists] = useState([])

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
              var newArr = []
              let lastIn =0;
              for(let i = 0; i < data.length; i++){
                  
                if(i >= 0 && i < data.length - 1){
                    var next = data[i + 1].lid
                }
                let current = data[i].lid
                
                if(current !== next || i === data.length-1){
                    newArr.push({
                        lid: data[i].lid,
                        title:data[i].title,
                        datacard: data.slice(lastIn,i + 1)
                    })
                    lastIn = i + 1
                }
              }
             setLists(newArr)
            setLoading(true)
        })
    }
     
    
    useEffect(() => {
        
        getProject()
        getData()
       
    }, [])

    const onDragEnd = (result) => {
        const {source, destination}= result;
       
        if(!destination) return;

        if(destination.droppableId === source.droppableId && destination.index ===source.index) return;
  
        setLists(reorderCards(lists, source, destination))
    }
  return (
      <DragDropContext onDragEnd={onDragEnd} >
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
                    {console.log(lists)}
                        {
                        
                            lists.map((item, index) => {
                               
                                return  <Card key={index} lists={lists} setLists ={setLists} dataCard = {item.datacard} help_index = {index}  title={item.title.replaceAll('"', '')} lid = {item.lid}/>
                            })
                        }
                    <AddList pid = {Board.pid ? Board.pid : parseInt(getPID())} lists={lists} setArr = {setLists}/>
                    
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