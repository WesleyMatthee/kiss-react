import './root.css';
import Nav from './nav';
import Footer from './footer';
import { useNavigate } from 'react-router-dom'

export default function Cpr(){
const navigate = useNavigate();

  return (
    <main>

    <Nav/>

    <div className='carousel-wrapper'>
        <div className='profileimage'>
            <img className='userimage' src='/images/Kiss-Logo-Red.png'></img> 
        </div>
    </div>

    <div className='button-buffer'>
        <button className='start-button' type='button'>START</button>
        <button className='monitor-button' type='button' onClick={() => navigate('/monitor')}>MONITOR</button>
      </div>

  
    <section className='container'>
      <ul className='emergencies-button'>
        <button type="button" onClick={() => navigate('/adultCpr')}>Adult 15yrs +</button>
        <button type="button" onClick={() => navigate('/childCpr')}>Child 2-15yrs</button>
        <button type="button" onClick={() => navigate('/infantCpr')}>Infant -2yrs</button>
      </ul>
    </section>
    
    
   
    <footer >
        <Footer />
      </footer>
  </main>
  );

 
}

 
