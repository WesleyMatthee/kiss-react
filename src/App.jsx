import { Route, Routes, useNavigate } from "react-router-dom";

import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./components/Home";
import CPR from "./components/cpr";
import Choking from "./components/Choking";
import Carousel from "./components/Carousel";
import { CarouselItem } from "./components/CarouselItem";
import ErrorPage from "./error-page"
import StartMonitorTimer from "./components/StartMonitorTimer";
import MonitorButton from "./components/MonitorButton";
import Monitor from "./components/Monitor";



export default function App() {


  return (
    <>
      <Nav />
      <div className='carousel-wrapper'>
        <Carousel>
          <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
          <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
          <CarouselItem><img className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
        </Carousel>
      </div>
      <div className="button-buffer">
        <StartMonitorTimer />
        <MonitorButton />
      </div>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/CPR" element={<CPR />} errorElement={<ErrorPage />} />
        <Route path="/choking" element={<Choking />} errorElement={<ErrorPage />} />
        <Route path="/monitor" element={<Monitor />} errorElement={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}