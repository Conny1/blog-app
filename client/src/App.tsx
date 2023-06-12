
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Post from './pages/Post'
import Forms from './components/Forms'
import Login from './pages/Login'
import Signup from './pages/Signup'
 


function App() {
  

  return (
    
      <div>
        <BrowserRouter>
        
        <Routes>
         <Route path='/' element={<Home/> }/>
         <Route path='auth' >
            <Route path='signup' element={<Signup/> }/>
            <Route index element={<Login/> }/>
          
         </Route>
         <Route path='post' element={<Post/> }/>
         <Route path='form' element={<Forms/> }/>
        </Routes>
        </BrowserRouter>
        
      </div>
      
  )
}

export default App
