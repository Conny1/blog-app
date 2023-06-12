
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Post from './pages/Post'
import Forms from './components/Forms'
 


function App() {
  

  return (
    
      <div>
        <BrowserRouter>
        
        <Routes>
         <Route path='/' element={<Home/> }/>
         <Route path='auth' element={<Auth/> }/>
         <Route path='post' element={<Post/> }/>
         <Route path='form' element={<Forms/> }/>
        </Routes>
        </BrowserRouter>
        
      </div>
      
  )
}

export default App
