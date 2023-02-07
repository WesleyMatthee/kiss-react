import './root.css';
import Nav from './nav';
import Footer from './footer';
import { useNavigate } from 'react-router-dom'

export default function AdultChoking() {
  const navigate = useNavigate();

  return (
    <main>

      <Nav />

      <div className='carousel-wrapper'>
        <Carousel>
          <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
          <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
          <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
        </Carousel>
      </div>

      <div className='button-buffer'>
        <button className='start-button' type='button'>START</button>
        <button className='monitor-button' type='button' onClick={() => navigate('/monitor')}>MONITOR</button>
      </div>


      <section className='container'>
        <ol className='choking-steps'>
          <li> Make sure the scene if safe for you to approach. </li>
          <li> Get consent if casualty is conscious </li>
          <li> If you do not know the person DO NOT do mouth breathes, simply pause for a few seconds before continuing chest compressions. </li>
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


