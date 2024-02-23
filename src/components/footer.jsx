// Import images
import En from '../assets/en.png';
import Es from '../assets/es.png';
import Fr from '../assets/fr.png';
import Pt from '../assets/pt.png';
// Import Styles
import '../styles/footer.css'

function footer() {
    return ( 
        <div className='lang'>
            <img src={En} alt="En" />
            <img src={Es} alt="Es" />
            <img src={Fr} alt="Fr" />
            <img src={Pt} alt="Pt" />     
        </div>
);        
}

export default footer;