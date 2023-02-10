import React, { useEffect, useState } from 'react';
import './TimerModal.css';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
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
		let seconds = sec * 15;
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
				<div className='main-container center'>
					<h1 className='timer-numbers'>{Math.round(timer / 1000)}</h1>
					{/* progress indicator */}
					<div className='circle-container center'>
						<div className='semicircle'></div>
						<div className='semicircle'></div>
						<div className='semicircle'></div>
						<div className='outermost-circle'></div>
					</div>
				</div>
				<div className='timer-icons'>
					<FontAwesomeIcon
						icon={faXmark}
						className='timer-icon'
						onClick={onClose}
					/>

					<FontAwesomeIcon
						icon={faRotateLeft}
						className='timer-icon'
						onClick={() => {
							setIsReset(!isReset);
						}}
					/>
				</div>
			</div>
		</>,
		document.getElementById('portal')
	);
}
