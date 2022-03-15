
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Components/pages'
import Template from './Components/pages/template';
import Signin from './Components/pages/Signin';
import Register from './Components/Register';
import BoardNew from './Components/pages/BoardNew'
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div>
        <Routes>
            <Route path = '/' element={<Home/>} />
            <Route path = '/signin' element={<Signin/>} />
            <Route path = '/register' element={<Register/>}/>

            <Route path = '/templates' element={
                      <PrivateRoute>
                        <Template/>
                      </PrivateRoute>
                    }/>
            <Route path = '/Board' element={<BoardNew/>} />
        </Routes>
    </div>
  );
}

export default App;
