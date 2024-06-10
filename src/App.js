import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import FirstPage from './Pages/FirstPage.js';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Event from './Pages/Event.js';
import LearningSanskrit from './Pages/LearningSanskrit.js';
import Courses from './Pages/Courses.js';
import Resources from './Pages/Resources.js';
import SaastraSetu from  './Pages/SaastraSetu.js';
import SignUp from  './components/SignUp.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<FirstPage/>}/>     
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>      
        <Route path="/events" element={<Event/>}/> 
        <Route path="/learningSanskrit" element={<LearningSanskrit/>}/>
        <Route path="courses" element={<Courses/>}/> 
        <Route path="/ShaastraSetu" element={<SaastraSetu/>}/> 
        <Route path="/resources" element={<Resources/>}/>  
         <Route path="/signup" element={<SignUp/>}/>
        
        
        </Routes>
      </BrowserRouter>

          
    </div>
  );
}

export default App;
