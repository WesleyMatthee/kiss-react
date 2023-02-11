import React from 'react';
import '../index.css';
import Pulse from './subMonitor/Pulse';
import Respirations from './subMonitor/Respirations';
import SkinCondition from './subMonitor/SkinCondition';
import Pearl from './subMonitor/Pearl';
import ExtraNotes from './subMonitor/ExtraNotes';

export default function Monitor({
	setSelectedMonitor,
	selectedMonitor,
	setIsPulse,
	setIsRespirations,
	setIsSkinCon,
	setIsPupils,
}) {
	//Functions for onClick events
	function setSelectedMonitorPulse() {
		setSelectedMonitor(1);
		setIsPulse(true);
	}
	function setSelectedMonitorRespirations() {
		setSelectedMonitor(2);
		setIsRespirations(true);
	}
	function setSelectedMonitorSkinCon() {
		setSelectedMonitor(3);
		setIsSkinCon(true);
	}
	function setSelectedMonitorPupils() {
		setSelectedMonitor(4);
		setIsPupils(true);
	}
	return (
		<>
			{selectedMonitor === 0 && (
				<section className='container'>
					<ul className='emergencies-button'>
						<button type='button' onClick={() => setSelectedMonitorPulse()}>
							Pulse
						</button>
						<button
							type='button'
							onClick={() => setSelectedMonitorRespirations()}
						>
							Respirations
						</button>
						<button type='button' onClick={() => setSelectedMonitorSkinCon()}>
							Skin Condition
						</button>
						<button type='button' onClick={() => setSelectedMonitorPupils()}>
							Pupils
						</button>
						<button type='button' onClick={() => setSelectedMonitor(5)}>
							Extra Notes
						</button>
					</ul>
				</section>
			)}
			{selectedMonitor === 1 && (
				<Pulse
					setSelectedMonitor={setSelectedMonitor}
					setIsRespirations={setIsRespirations}
					setIsPulse={setIsPulse}
				/>
			)}
			{selectedMonitor === 2 && (
				<Respirations
					setSelectedMonitor={setSelectedMonitor}
					setIsPulse={setIsPulse}
					setIsSkinCon={setIsSkinCon}
					setIsRespirations={setIsRespirations}
				/>
			)}
			{selectedMonitor === 3 && (
				<SkinCondition setSelectedMonitor={setSelectedMonitor} />
			)}
			{selectedMonitor === 4 && (
				<Pearl setSelectedMonitor={setSelectedMonitor} />
			)}
			{selectedMonitor === 5 && (
				<ExtraNotes setSelectedMonitor={setSelectedMonitor} />
			)}
		</>
	);
}
