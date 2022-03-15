import React,{useEffect, useState} from 'react'
import { useAuth } from '../Context/AuthContext'
import NavBar from '../Template/NavBar'
import Hero from '../Template/Hero'
import NewBoard from '../Template/NewBoard'
import Board from '../Template/Board'
import Create from '../Template/Create'
import { BallTriangle } from 'react-loader-spinner';
const Template = () => {
    const {currentUser, userID} = useAuth()
    const [loading, setLoading] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [arr, setArr] = useState([])

    const getData = () => {
      fetch('https://fathomless-tor-67298.herokuapp.com/getProjects', {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    uid: JSON.stringify(currentUser.uid)
                })
            }).then(res => res.json()) 
            .then(data => {
                console.log(data)
                setArr(data)
                setLoading(true)
            })
    }
    
    useEffect(() => {
      getData()
    },[])
  return (
    <div>
       <NavBar profilePic = {currentUser.photoURL} name = {currentUser.displayName} />
      
      {/*
        loading
        ?*/
        (
          <div>
           
            {currentUser.displayName && <h1 className='text-center mt-5'>Welcome {currentUser.displayName}</h1>}
            <Hero>
            {
              arr.map((item, index) => {
                return <Board photoUrl={item.url} title={item.title} pid = {item.pid}/>
              })
            }
              <NewBoard onClick= {() => setClicked(!clicked)} />
            
              <Create  onClick= {() => setClicked(!clicked)} clicked = {clicked}/>
              
            </Hero>
         </div>
         
        )/*
        :
        (
        <div className="ball">
            <BallTriangle  color='rgb(53, 162, 235)' height= '80' width='80' ariaLabel='loading'/>
        </div>
        )*/
    }
    </div>
  )
}

export default Template