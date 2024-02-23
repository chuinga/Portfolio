import { useState } from 'react';
// Import Styles
import './App.css';
// Import pages
import HomePage from './pages/HomePage';
// Import components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div>
      <HomePage />
      <Sidebar />
    </div>
    <Footer />
    </>
  )
}

export default App
