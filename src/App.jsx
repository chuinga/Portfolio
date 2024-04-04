// Import functionalities, hooks and components
import React, { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { Routes, Route } from 'react-router-dom';
// Import styles
import './App.css';
// Import pages
import HomePage from './pages/HomePage';
import Project from './pages/Project';
import PageNotFound from './pages/PageNotFound';
// Import components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';


function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);
  
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className='outerContainer'>
      <div className='mainContainer' data-theme={isDark ? 'dark' : 'light'}>     
        <header>
          <Header />
        </header> 
        <main>
          <div className='innerContainer'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/project/:projectName' element={<Project />} />      
              <Route path='*' element={<PageNotFound />} />  
            </Routes>      
            <Sidebar />
          </div>
        </main>
        <footer>
          <Footer isDark={isDark} toggleDarkMode={() => setIsDark(!isDark)} />
        </footer>       
      </div>  
    </div>
    
  )
}

export default App;