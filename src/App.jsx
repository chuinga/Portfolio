// Import functionalities, hooks and components
import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages and components
import HomePage from './pages/HomePage';
import Project from './pages/Project';
import PageNotFound from './pages/PageNotFound';
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
        
        <div className='Content'>
          <header>
            <Header />
          </header> 
          <main>
            <div className='innerContainer'>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/project/:projectName' element={<Project />} /> 
                // Clean up the code by replacing the following routes with a single dynamic route.:
                <Route path='/project/gravity/embed' element={<iframe src="https://gravitygame.netlify.app/" title="Gravity" style={{width: '100%', height: '100%'}}></iframe>} />
                <Route path='/project/pawsitivehomes/embed' element={<iframe src="https://main--pawsitivehomes.netlify.app/" title="Pawsitive Homes" style={{width: '100%', height: '100%'}}></iframe>} />
                <Route path='/project/groovegrid/embed' element={<iframe src="https://groovegrid.netlify.app/" title="GrooveGrid" style={{width: '100%', height: '100%'}}></iframe>} />
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
    </div>    
  )
}

export default App;