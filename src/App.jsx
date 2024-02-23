import { useState } from 'react';
import './App.css';
import Header from './components/header';
import HomePage from './pages/HomePage';
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
