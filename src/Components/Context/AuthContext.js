import React, {useContext, useState, useEffect} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase'


const AuthContext = React.createContext()



export const useAuth = () =>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [userID, setName] = useState({
        name: ''
    });
    const [Board, setBoard] = useState({
        background: null,
        title: '',
        pid: 0
    })

    const signup = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    


    const setupName = (name) =>{
        setName({
            name:name
        })
    }
   

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        return signOut(auth);
    }
    const giveName = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((res) => {
            console.log('gave name')

        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('currently loggined in')
          
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe

    }, [])

    const value  ={
        currentUser,
        login,
        signup,
        logout, 
        setupName,
        userID,
        giveName,
        setBoard,
        Board
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
