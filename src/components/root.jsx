import './root.css';
import Nav from './nav';
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel';
import { CarouselItem } from './CarouselItem';
import Footer from './footer';

export default function Root() {
  const navigate = useNavigate();

  return (
    <main className='Root'>

    <Nav/>

    <div className='carousel-wrapper'>
    <Carousel>
      <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png'/></CarouselItem>
      <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png'/></CarouselItem>
      <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png'/></CarouselItem>
    </Carousel>
    </div>

     <div className='button-buffer'>
        <button className='start-button' type='button'>START</button>
        <button className='monitor-button' type='button' onClick={() => navigate('/monitor')}>MONITOR</button>
      </div>

  
    <section className='container'>
      <ul className='emergencies-button'>
        <button type="button" onClick={() => navigate('/cpr')}>CPR</button>
        <button type="button" onClick={() => navigate('/choking')}>Choking</button>
        <button type="button">Bleeding</button>
        <button type="button">Anaphilylaxis</button>
        <button type="button">Other</button>
      </ul>
    </section>
    
    
   
    
  <footer >
    <Footer/>
  </footer>
  </main>
  );
}


