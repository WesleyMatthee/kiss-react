import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './components/Templates/nav';
import Footer from './components/Templates/footer';
import Home from './components/Home';
import CPR from './components/Cpr';
import Choking from './components/Choking';
import Carousel from './components/Templates/Carousel';
import { CarouselItem } from './components/Templates/CarouselItem';
import ErrorPage from './error-page';
import StartTimer from './components/Templates/StartTimer';
import MonitorButton from './components/Templates/MonitorButton';
import Monitor from './components/Monitor';
// import UserHistory from "./components/UserHistory";

export default function App() {
	const [selectedMonitor, setSelectedMonitor] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [seconds, setSeconds] = useState(0);
	const [isInfant, setIsInfant] = useState(false);
	const [isChild, setIsChild] = useState(false);
	const [isAdult, setIsAdult] = useState(false);
	const [isPulse, setIsPulse] = useState(false);
	const [isRespirations, setIsRespirations] = useState(false);
	const [isSkinCon, setIsSkinCon] = useState(false);
	const [isPupils, setIsPupils] = useState(false);
	const [isHome, setIsHome] = useState(true);

	const getCarouselItems = () => {
		if (isAdult) {
			return (
				<Carousel>
					<CarouselItem>
						<img
							alt='image01'
							className='carousel-img'
							src='/images/cpr_01.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<img
							alt='image02'
							className='carousel-img'
							src='/images/cpr_02.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<img
							alt='image03'
							className='carousel-img'
							src='/images/cpr_03.png'
						/>
					</CarouselItem>
				</Carousel>
			);
		} else if (isChild) {
			return (
				<Carousel>
					<CarouselItem>
						<img
							alt='image01'
							className='carousel-img'
							src='/images/cpr_child_01.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<img
							alt='image02'
							className='carousel-img'
							src='/images/cpr_child_02.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<img
							alt='image03'
							className='carousel-img'
							src='/images/cpr_child_03.png'
						/>
					</CarouselItem>
				</Carousel>
			);
		} else if (isInfant) {
			return (
				<Carousel>
					<CarouselItem>
						<img
							alt='image01'
							className='carousel-img'
							src='/images/cpr_infant_01.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<img
							alt='image02'
							className='carousel-img'
							src='/images/cpr_infant_02.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<img
							alt='image03'
							className='carousel-img'
							src='/images/cpr_infant_03.png'
						/>
					</CarouselItem>
				</Carousel>
			);
		} else if (isPulse) {
			return (
				<Carousel>
					<CarouselItem>
						<img
							alt='image01'
							className='carousel-img'
							src='/images/monitor_pulse_radial.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<img
							alt='image02'
							className='carousel-img'
							src='/images/monitor_pulse_carotid.png'
						/>
					</CarouselItem>
				</Carousel>
			);
		} else if (isRespirations) {
			return (
				<Carousel>
					<CarouselItem>
						<img
							alt='image01'
							className='carousel-img'
							src='/images/monitor_breathing.png'
						/>
					</CarouselItem>
				</Carousel>
			);
		} else if (isSkinCon) {
			return (
				<Carousel>
					<CarouselItem>
						<img
							alt='image01'
							className='carousel-img'
							src='/images/monitor_temp.png'
						/>
					</CarouselItem>
				</Carousel>
			);
		} else if (isPupils) {
			return (
				<Carousel>
					<CarouselItem>
						<img
							alt='image01'
							className='carousel-img'
							src='/images/monitor_pupils.png'
						/>
					</CarouselItem>
				</Carousel>
			);
		} else if (isHome) {
			return (
				<Carousel>
					<CarouselItem>
						<img
							alt='image01'
							className='carousel-img'
							src='/images/Xkiss.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<img
							alt='image02'
							className='carousel-img'
							src='/images/Xkiss.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<img
							alt='image03'
							className='carousel-img'
							src='/images/Xkiss.png'
						/>
					</CarouselItem>
				</Carousel>
			);
		}
	};

	return (
		<>
			<Nav isActive={isActive} seconds={seconds} setSeconds={setSeconds} />
			<div className='carousel-wrapper'>{getCarouselItems()}</div>
			<div className='button-buffer'>
				<StartTimer />
				<MonitorButton
					setSelectedMonitor={setSelectedMonitor}
					selectedMonitor={selectedMonitor}
				/>
			</div>
			<Routes>
				<Route
					path='/'
					element={<Home setIsActive={setIsActive} />}
					errorElement={<ErrorPage />}
				/>
				<Route
					path='/CPR'
					element={
						<CPR
							setIsActive={setIsActive}
							setIsAdult={setIsAdult}
							setIsChild={setIsChild}
							setIsInfant={setIsInfant}
						/>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path='/choking'
					element={<Choking setIsActive={setIsActive} />}
					errorElement={<ErrorPage />}
				/>
				<Route
					path='/monitor'
					element={
						<Monitor
							setIsPulse={setIsPulse}
							setIsRespirations={setIsRespirations}
							setIsSkinCon={setIsSkinCon}
							setIsPupils={setIsPupils}
							setSelectedMonitor={setSelectedMonitor}
							selectedMonitor={selectedMonitor}
							setIsHome={setIsHome}
						/>
					}
					errorElement={<ErrorPage />}
				/>
			</Routes>
			<Footer
				setIsHome={setIsHome}
				setIsAdult={setIsAdult}
				setIsChild={setIsChild}
				setIsInfant={setIsInfant}
				setIsPulse={setIsPulse}
				setIsRespirations={setIsRespirations}
				setIsSkinCon={setIsSkinCon}
				setIsPupils={setIsPupils}
			/>
		</>
	);
}
