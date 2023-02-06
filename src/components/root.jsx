import './root.css';
import Nav from './nav';

export default function root() {
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
        <button type="button">CPR</button>
        <button type="button">Choking</button>
        <button type="button">Bleeding</button>
        <button type="button">Anaphilylaxis</button>
        <button type="button">Other</button>
      </ul>
    </section>
    
    
   {/* footer (fixed)  */}
  <footer>
    
  </footer>
  </main>
  );

 
}

 
