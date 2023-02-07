import './root.css';
import Nav from './nav';
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import { CarouselItem } from './CarouselItem';
import Footer from './footer';

export default function Respirations() {
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

      <div className='button-buffer'><button className='start-timer' type='button'>START TIMER</button> <button className='monitor-button' type='button'>MONITOR</button></div>


      <section className='container'>
        <ol className='respirations-steps'>
          <li>Watch the chest for it rising.</li>
          <li>Pay attention to the depth of each breath, is it a full breath? is it shallow?</li>
          <li>Pay attention to the sound of each breath as well. does it sound clear or is there wheezing/gurgaling?</li>
          <li>Start the timer, it will run for 15 seconds.</li>
          <li>Input the number you got in the form below.</li>
        </ol>
      </section>
      <form><input type="text" /> <button className='submit-button' type="submit"></button> </form>
      <button className='back-monitor' onClick={() => navigate('/pulse')}>BACK</button>
      <button className='next-monitor' onClick={() => navigate('/skinCondition')}>NEXT</button>




      <footer >
        <Footer />
      </footer>
    </main>
  );
}


