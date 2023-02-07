import './root.css';
import Nav from './nav';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import { CarouselItem } from './CarouselItem';

export default function InfantCpr() {
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
        <ol className='cpr-steps'>
          <li> Make sure the scene if safe for you to approach. </li>
          <li> CPR is required if the casualty has no pulse or respirations. </li>
          <li> If you do not know the person DO NOT do mouth breathes, simply pause for a few seconds before continuing chest compressions. </li>
          <li> If you get very tired you must STOP. DO NOT put yourself in danger. </li>
          <li> Place two fingers on their chest as shown in the picture above. </li>
          <li> Push approximately ⅓ the depth of the chest or 1/2 inch. </li>
          <li> After 30 compressions administer mouth breaths or take a pause for a few seconds. </li>
          <li> STOP once you see signs of life or help arrives </li>
        </ol>
      </section>



      <footer >
        <Footer />
      </footer>
    </main>
  );


}


