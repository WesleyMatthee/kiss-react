import './root.css';
import Nav from './nav';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import { CarouselItem } from './CarouselItem';
import Footer from './footer';

export default function Pearl() {
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
        <ol className='pearl-steps'>
          <li>Cover both of their eyes.</li>
          <li>Using either natural sunlight or a phone light, uncover one of their eyes and shine the light towards the uncovered eye.</li>
          <li>Pay attention to the pupil of the individual, it should shrink when exposed to light</li>
          <li>Repeat the previous steps for the other eye and make note if the pupils were both equally reactive to light</li>
        </ol>
      </section>
      <form><input type="text" /> <button className='submit-button' type="submit"></button> </form>
      <button className='back-monitor' onClick={() => navigate('/skinCondition')}>BACK</button>
      <button className='next-monitor' onClick={() => navigate('/circulation')}>NEXT</button>



      <footer >
        <Footer />
      </footer>
    </main>
  );
}


