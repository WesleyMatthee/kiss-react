import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Nav from "./components/Templates/nav";
import Footer from "./components/Templates/footer";
import Home from "./components/Home";
import CPR from "./components/Cpr";
import Choking from "./components/Choking";
import Carousel from "./components/Templates/Carousel";
import { CarouselItem } from "./components/Templates/CarouselItem";
import ErrorPage from "./error-page";
import StartTimer from "./components/Templates/StartTimer";
import MonitorButton from "./components/Templates/MonitorButton";
import Monitor from "./components/Monitor";
// import UserHistory from "./components/UserHistory";


export default function App() {
  const [selectedMonitor, setSelectedMonitor] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  

  return (
    <>
      <Nav 
      isActive={isActive}
      seconds={seconds}
      setSeconds={setSeconds}
      />
      <div className='carousel-wrapper'>
        <Carousel>
          <CarouselItem><img alt='image01' className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
          <CarouselItem><img alt='image02' className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
          <CarouselItem><img alt='image03' className='carousel-img' src='/images/Proxy-IMG.png' /></CarouselItem>
        </Carousel>
      </div>
      <div className="button-buffer">
        <StartTimer />
        <MonitorButton setSelectedMonitor={setSelectedMonitor} selectedMonitor={selectedMonitor}/>
      </div>
      <Routes>
        <Route path="/" element={<Home setIsActive={setIsActive}/>} errorElement={<ErrorPage />} />
        <Route path="/CPR" element={<CPR setIsActive={setIsActive}/>} errorElement={<ErrorPage />} />
        <Route path="/choking" element={<Choking setIsActive={setIsActive}/>} errorElement={<ErrorPage />} />
        <Route path="/monitor" element={<Monitor setSelectedMonitor={setSelectedMonitor} selectedMonitor={selectedMonitor}/>} errorElement={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
};