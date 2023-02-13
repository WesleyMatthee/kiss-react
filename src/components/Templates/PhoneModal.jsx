import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import ReactSwipeButton from 'react-swipe-button';
import  ReactDom  from 'react-dom';

import React from 'react';
import './PhoneModal.css';

export default function PhoneModal({ open, onClose }) {
	// const [reset, setReset] = useState(0);
	const success = () => {
		console.log('weell');
	};

	if (!open) return null;

	return ReactDom.createPortal(
		<>
			<div className='dark-overlay'>
				<div className='phone-modal'>
					<FontAwesomeIcon
						icon={faCircleXmark}
						onClick={onClose}
						className='close-modal'
					/>
				</div>

				<div className='swipe-button'>
					<ReactSwipeButton text='CALL 911' color='#f00' onSuccess={success} />
				</div>
			</div>
		</>,
		document.getElementById('portal')
	);
}
