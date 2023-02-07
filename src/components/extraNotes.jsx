import './root.css';
import Nav from './nav';
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import { CarouselItem } from './CarouselItem';
import Footer from './footer';

export default function ExtraNotes() {
  const navigate = useNavigate();

  return (
    <main className='Monitor'>

      <Nav />

      <div className='carousel-wrapper'>
        <Carousel>
          <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
          <CarouselItem>Item2</CarouselItem>
          <CarouselItem>Item3</CarouselItem>
        </Carousel>
      </div>

      <div className='button-buffer'><button className='start-timer' type='button'>START TIMER</button> <button className='monitor-button' type='button'>MONITOR</button></div>


      <section className='container'>
        <ol className='extraNotes-steps'>
          <li>Please input any extra information or notes here.</li>
        </ol>
      </section>
      <form><input type="text" /> <button className='submit-button' type="submit"></button> </form>
      <button className='back-monitor' onClick={() => navigate('/circulation')}>BACK</button>


      <footer >
        <Footer />
      </footer>
    </main>
  );
}


