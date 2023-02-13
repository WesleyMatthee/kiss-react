import React, { useState } from 'react';
import '../../index.css';
import TimerModal from './TimerModal';

export default function StartTimer(props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className='start-button'
				type='button'
				onClick={() => {
					setIsOpen(true);
				}}
			>
				START
			</button>
			<div className='timer-modal'>
				<TimerModal open={isOpen} onClose={() => setIsOpen(false)}></TimerModal>
			</div>
		</>
	);
}
