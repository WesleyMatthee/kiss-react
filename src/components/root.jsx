import './root.css';
import Nav from './nav';
import Carousel from './Carousel'
import { CarouselItem } from './Carouseltem';

export default function root() {
  return (
    <main className='Root'>

    <Nav/>

    <Carousel>
      <CarouselItem img className='white-logo' src='/images/Kiss-Logo-White.png' >Item1</CarouselItem>
      <CarouselItem>Item2</CarouselItem>
      <CarouselItem>Item3</CarouselItem>
    </Carousel>

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

 
