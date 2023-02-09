import React from 'react';
import './TimerModal.css';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './PhoneModal.css';

export default function TimerModal({ open, onClose }) {
	if (!open) return null;

	const seconds = 1000;

	function countDownTimer() {
		//progress indicator
		//timer
		//5 second condition
		//end
	}

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
