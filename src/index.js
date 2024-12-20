import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Importez BrowserRouter

import App from './App';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import WelcomePage from './components/WelcomePage'; 

import Profile from './components/Profile';
import Sidebar from './components/Sidebar';

import FirstP from './components/FirstPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstP />} />
        
        <Route path="/welcomePage" element={<WelcomePage />} />
        <Route path="/Profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 // <React.StrictMode>
  //   <BrowserRouter>
  //   <FirstP/>
    
    
  //   </BrowserRouter>
  //         {/* <Route path="/" element={<LoginForm />} />
  //         <Route path="/register" element={<RegisterForm />} />
  //         <Route path="/login" element={<LoginForm />} />
  //         <Route path="/welcomePage" element={<WelcomePage />} /> */}
  //       {/* <Profile/>
  //       <Sidebar/> */}
        
  // </React.StrictMode>