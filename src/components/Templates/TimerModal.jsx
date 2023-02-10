import React, { useEffect, useState } from 'react';
import './TimerModal.css';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './PhoneModal.css';

export default function TimerModal({ open, onClose }) {
	const [timer, setTimer] = useState(15);
	useEffect(() => {
		const semicircles = document.querySelectorAll('.semicircle');
		console.log(semicircles);

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
				//timer
				//5 second condition
				if (remainingTime < 0) {
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
	}, [open]);

	if (!open) return null;

	//Timer Logic

	const sec = 1000;
	const seconds = sec * 5;
	const setTime = seconds;
	const startTime = Date.now();
	const futureTime = startTime + setTime;

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
				{timer > 0 ? null : <button>reset</button>}
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
