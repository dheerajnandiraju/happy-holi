


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/signin';
import { Navbar, Nav } from "react-bootstrap";
import { useState } from 'react';
import Wishes from './components/wishes';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './app.css'
function App() {
const[username,setusername]=useState('')

const show=(data)=>{
  setusername(data)
}
console.log(username)

  return (
    <div className="center display">
    <h2 className='text'>Developed by Dheeraj Nandiraju</h2>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Signin names={show} />}/>
      <Route path='/wishes' element={<Wishes send={username}/>}/>
     </Routes>
     </BrowserRouter>
     <div style={{margin:"1rem",}}>\
      <Nav.Link href="https://www.instagram.com/dheerajnandiraju/">
     <FaInstagram size={40} color='#959595'/>
     </Nav.Link>
     <div >
     <Nav.Link style={{marginLeft:"1rem"}} href="https://www.linkedin.com/in/dheeraj-nandiraju/">
     <FaLinkedin size={40} color='#959595'/>
     </Nav.Link>
     </div>
     </div>
    </div>
  );
}

export default App;
