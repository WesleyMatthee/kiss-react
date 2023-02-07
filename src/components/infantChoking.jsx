import './root.css';
import Nav from './nav';
import Footer from './footer';
import { useNavigate } from 'react-router-dom'

export default function InfantChoking() {
  const navigate = useNavigate();

  return (
    <main>

      <Nav />

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
        <ol className='choking-steps'>
          <li> Make sure the scene if safe for you to approach. </li>
          <li> Get consent from a parent or guardian if they are present, if not ask the child. </li>
          <li> If consent is denied by a parent or guardian, wait until the casualty loses consciousness. An unconscious individual is assumed to give implied consent. Continue with CPR on the unconscious individual. </li>
          <li> If consent is denied, wait until the casualty loses consciousness. An unconscious individual is assumed to give implied consent. Continue with CPR on the unconscious individual. </li>
          <li> If consent is accepted then begin with 5 abdominal thrust (as shown above) followed by 5 back blows (as shown above) until blockage is cleared. </li>
          <li> If the individual loses consciousness before blockage is cleared, continue with CPR. </li>
        </ol>
      </section>



      <footer >
        <Footer />
      </footer>
    </main>
  );


}


