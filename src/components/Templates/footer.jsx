import './footer.css';
import './PhoneModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import PhoneModal from './PhoneModal';

import React, { useState } from 'react';

export default function Footer({
	setIsHome,
	setIsAdult,
	setIsChild,
	setIsInfant,
	setIsPulse,
	setIsRespirations,
	setIsSkinCon,
	setIsPupils,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	function setHomeBtn() {
		navigate('/');
		setIsHome(true);
		setIsAdult(false);
		setIsChild(false);
		setIsInfant(false);
		setIsPulse(false);
		setIsRespirations(false);
		setIsSkinCon(false);
		setIsPupils(false);
	}
	return (
		<>
			<footer className='footer'>
				<div>
					<FontAwesomeIcon
						icon={faHouse}
						onClick={() => setHomeBtn()}
						className='footer-icon'
					/>
					<FontAwesomeIcon
						icon={faChartSimple}
						onClick={() => navigate('/report')}
						className='footer-icon'
					/>
					<FontAwesomeIcon
						icon={faUser}
						onClick={() => navigate('/profile')}
						className='footer-icon'
					/>
					<FontAwesomeIcon
						icon={faPhone}
						onClick={() => setIsOpen(true)}
						className='footer-phone'
					/>
				</div>
			</footer>
			<div className='phone-modal'>
				<PhoneModal open={isOpen} onClose={() => setIsOpen(false)}></PhoneModal>
			</div>
		</>
	);
}
