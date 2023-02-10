import React, { useEffect, useState } from 'react';
import './TimerModal.css';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './PhoneModal.css';

export default function TimerModal({ open, onClose }) {
	const [timer, setTimer] = useState(15);
	const [isReset, setIsReset] = useState(false);

	useEffect(() => {
		const semicircles = document.querySelectorAll('.semicircle');
		// console.log(semicircles);
		if (semicircles.length > 0) {
			// console.log('Hello: IS here, HERE?');
			semicircles[0].style.display = 'block';
			semicircles[1].style.display = 'block';
			semicircles[2].style.display = 'block';
		}

		let sec = 1000;
		let seconds = sec * 5;
		let setTime = seconds;
		let startTime = Date.now();
		let futureTime = startTime + setTime;
    
		function countDownTimer() {
			if (semicircles.length > 0) {
				const currentTime = Date.now();
				const remainingTime = futureTime - currentTime;
				setTimer(remainingTime);
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

				if (remainingTime <= 0) {
					setTimer(false);
					semicircles[0].style.display = 'none';
					semicircles[1].style.display = 'none';
					semicircles[2].style.display = 'none';
				}
			}
			//end
		}
		const timerLoop = setInterval(countDownTimer);
		return () => {
			clearInterval(timerLoop);
		};
	}, [open, isReset]);

	if (!open) return null;

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
				<h1 className='timer-numbers'>{Math.round(timer / 1000)}</h1>
				{timer > 0 ? null : (
					<button
						onClick={() => {
							setIsReset(!isReset);
						}}
					>
						reset
					</button>
				)}
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
