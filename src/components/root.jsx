import './root.css';

export default function root() {
  return (
    <main>
    {/* Top nav bar (fixed) */}
    <nav>
        <div className='logo'>
          <img className='white-logo' src='/images/Kiss-Logo-White.png'></img>
        </div>
        <img></img>
    </nav>

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

 
