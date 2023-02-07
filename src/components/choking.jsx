import './root.css';
import Nav from './nav';
import { useNavigate } from 'react-router-dom'


export default function Choking(){
const navigate = useNavigate();

  return (
    <main>

    <Nav/>

    <div className='carousel-wrapper'>
        <div className='profileimage'>
            <img className='userimage' src='/images/Kiss-Logo-Red.png'></img> 
        </div>
    </div>

    <div className='button-buffer'><button className='start-button' type='button'>START</button> <button className='monitor-button' type='button'>MONITOR</button></div>

  
    <section className='container'>
      <ul className='emergencies-button'>
        <button type="button" onClick={() => navigate('/adultChoking')}>Adult 15yrs +</button>
        <button type="button" onClick={() => navigate('/childChoking')}>Child 2-15yrs</button>
        <button type="button" onClick={() => navigate('/infantChoking')}>Infant -2yrs</button>
      </ul>
    </section>
    
    
   {/* footer (fixed)  */}
  <footer>

  </footer>
  </main>
  );

 
}

 
