import './root.css';
import Nav from './nav';
import Carousel from './Carousel'
import { CarouselItem } from './CarouselItem';

export default function root() {
  return (
    <main className='Root'>

    <Nav/>

    <div className='carousel-wrapper'>
    <Carousel>
      <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png'/></CarouselItem>
      <CarouselItem>Item2</CarouselItem>
      <CarouselItem>Item3</CarouselItem>
    </Carousel>
    </div>

    <div className='button-buffer'><button className='start-button' type='button'>START</button> <button className='monitor-button' type='button'>MONITOR</button></div>

  
    <section className='container'>
      <ul className='emergencies-button'>
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

 
