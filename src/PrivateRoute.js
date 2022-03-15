import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from './Components/Context/AuthContext'

const PrivateRoute = ({children,}) => {
    const {currentUser} = useAuth()
    return currentUser ? children : <Navigate to = "/"/>
}

export default PrivateRoute