import React, {useState} from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../Context/AuthContext'
import {updateProfile} from 'firebase/auth'
import { auth } from '../../firebase'
const Register = () => {
 const {signup, setupName} = useAuth() 
 const [name,setName] = useState('')
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [register, setRegister] = useState(false)
 const [error, setError] = useState(false)

 const registerUser = async(e) => {
     e.preventDefault()
     try{
        
        await signup(email,password)
        updateProfile(auth.currentUser, {
              displayName: name
          }).then((res) => {
              setRegister(true)

          }).catch((error) => {
              console.log(error)
          })
        
        
     }catch(error){
         console.log('Couldnt register', error)
         setError(true)
     }
       
     
 }
  return (
    <section class="vh-100" style={{backgroundColor: '#eee'}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: '25px'}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" onChange={(e) => setName(e.target.value)} required />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" onChange={(e) => setEmail(e.target.value)} required />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" onChange={(e) => setPassword(e.target.value)} required/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                 

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                    />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                    
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn purp white btn-lg" onClick={registerUser}>Register</button>
                  </div>
                  {
                        error && <h6 className='red'>Couldnt register! Please try again</h6>
                    }
                {
                    register && <Navigate to={'/templates'}/>
                }
                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Register