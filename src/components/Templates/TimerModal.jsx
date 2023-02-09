import React from 'react';
import './TimerModal.css';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './PhoneModal.css';

export default function TimerModal({ open, onClose }) {
	if (!open) return null;

	//Timer Logic
	const semicircles = document.querySelectorAll('.semicircle');
	const sec = 10;
	const seconds = sec * 1000;
	const setTime = seconds;
	const startTime = Date.now();
	const futureTime = startTime + setTime;

	// const timerLoop = setInterval(countDownTimer);
	// countDownTimer();

	function countDownTimer() {
		const currentTime = Date.now();
		const remainingTime = futureTime - currentTime;
		const angle = (remainingTime / setTime) * 360;
		//progress indicator
		if (angle > 180) {
			semicircles[2].style.display = 'none';
			semicircles[0].style.transform = 'rotate(180deg)';
			semicircles[1].style.transform = `rotate(${angle}deg)`;
		} else {
			semicircles[2].style.display = 'block';
			semicircles[0].style.transform = `rotate(${angle}deg)`;
			semicircles[1].style.transform = `rotate(${angle}deg)`;
		}
		//timer
		//5 second condition
		if (remainingTime < 0) {
			clearInterval(timerLoop);
			semicircles[0].style.display = 'none';
			semicircles[1].style.display = 'none';
			semicircles[2].style.display = 'none';
		}
		//end
	}

	countDownTimer();

	return ReactDom.createPortal(
		<>
			<div className='dark-overlay'>
				<div className='close-modal'>
					<FontAwesomeIcon
						icon={faCircleXmark}
						onClick={onClose}
						className='close-modal'
					/>
				</div>
				<h1 className='timer-numbers'>15</h1>
				<div className='main-container center'>
					{/* progress indicator */}
					<div className='circle-container center'>
						<div className='semicircle'></div>
						<div className='semicircle'></div>
						<div className='semicircle'></div>
						<div className='outermost-circle'></div>
					</div>
					{/* timer */}
				</div>
			</div>
		</>,
		document.getElementById('portal')
	);
}
