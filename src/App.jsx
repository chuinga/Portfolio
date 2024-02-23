// Import Styles
import './App.css';
// Import pages
import HomePage from './pages/HomePage';
// Import components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

function App() {
  return (
    <div className='frame'>
      <Header />
    <div className='mainContainer'>
      <HomePage className='homePage'/>
      <Sidebar className='sidebar'/>
    </div>
    <Footer />
    </div>  
  )
}

export default App;