import './root.css';
import Nav from './nav';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import { CarouselItem } from './CarouselItem';


export default function Choking() {
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
        <button className='monitor-button' type='button'>MONITOR</button>
      </div>


      <section className='container'>
        <ul className='emergencies-button'>
          <button type="button" onClick={() => navigate('/adultChoking')}>Adult 15yrs +</button>
          <button type="button" onClick={() => navigate('/childChoking')}>Child 2-15yrs</button>
          <button type="button" onClick={() => navigate('/infantChoking')}>Infant -2yrs</button>
        </ul>
      </section>


      {/* footer (fixed)  */}
      <footer>

      </footer>
    </main>
  );


}


