import './root.css';
import Nav from './nav';
import { useNavigate } from 'react-router-dom'

export default function ChildCpr() {
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
        <ol className='cpr-steps'>
          <li> Make sure the scene if safe for you to approach. </li>
          <li> CPR is required if the casualty has no pulse or respirations. </li>
          <li> If you do not know the person DO NOT do mouth breathes, simply pause for a few seconds before continuing chest compressions. </li>
          <li> If you get very tired you must STOP. DO NOT put yourself in danger. </li>
          <li> Place one of your hands on their chest as shown in the picture above. </li>
          <li> Push approximately ⅓ the depth of the chest or 1 inch. </li>
          <li> After 30 compressions administer mouth breaths or take a pause for a few seconds. </li>
          <li> STOP once you see signs of life or help arrives </li>
        </ol>
      </section>


      {/* footer (fixed)  */}
      <footer>

      </footer>
    </main>
  );


}


