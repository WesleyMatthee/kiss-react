import './root.css';
import Nav from './nav';
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import { CarouselItem } from './CarouselItem';
import Footer from './footer';

export default function Monitor() {
const navigate = useNavigate();

  return (
    <main className='Monitor'>

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
        <button type="button" onClick={() => navigate('/pulse')}>Pulse</button>
        <button type="button" onClick={() => navigate('/respirations')}>Respirations</button>
        <button type="button" onClick={() => navigate('/skinCondition')}>Skin Condition</button>
        <button type="button" onClick={() => navigate('/pearl')}>Pupils</button>
        <button type="button" onClick={() => navigate('/circulation')}>Circulation</button>
        <button type="button" onClick={() => navigate('/extraNotes')}>Extra Notes</button>
      </ul>
    </section>
    
    
   
    
  <footer >
    <Footer/>
  </footer>
  </main>
  );
}

 
