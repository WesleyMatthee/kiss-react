import './root.css';

import Nav from './nav'

export default function root() {
  return (
    <main>
      <Nav/>

    <div className='wrapper'>
      <header className='main-header'>
        <div className='profileimage'>
            <img className='userimage' src='/images/Kiss-Logo-Red.png'></img> 
        </div>
      </header>
    </div>

  
    <section className='container'>
      <ul>
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

 
