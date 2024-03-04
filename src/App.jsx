import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Import styles
import './App.css';
// Import pages
import HomePage from './pages/HomePage';
import Project from './pages/Project';
// Import components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

function App() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className='frame' data-theme={isDark ? 'dark' : 'light'}>      
      <Header />
      <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<HomePage className='homePage'/>} />
          <Route path='/project/:projectName' element={<Project className='Project'/>} />        
        </Routes>      
        <Sidebar className='sidebar'/>
      </div>
      <Footer isDark={isDark} toggleDarkMode={() => setIsDark(!isDark)} />
    </div>  
  )
}

export default App;