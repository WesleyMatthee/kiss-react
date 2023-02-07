import './root.css';
import Nav from './nav';
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import { CarouselItem } from './CarouselItem';
import Footer from './footer';

export default function Pulse() {
  const navigate = useNavigate();

  return (
    <main className='Monitor'>

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
        <ol className='pulse-steps'>
          <li>Place two fingers on the radial artery as shown above, if the casualty is concsious.</li>
          <li>Place two fingers on the carotid artery as shown above, if the casualty is unconcsious.</li>
          <li>Press the Start Timer button to begin a 15 second timer and count their pulse.</li>
          <li>Input the number you got in the form below.</li>
        </ol>
      </section>
      <form><input type="text" /> <button className='submit-button' type="submit"></button> </form>
      <button className='next-monitor' onClick={() => navigate('/respirations')}>NEXT</button>



      <footer >
        <Footer />
      </footer>
    </main>
  );
}


