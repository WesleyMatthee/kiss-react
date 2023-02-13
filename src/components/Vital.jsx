import React from 'react';
import './Vital.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faLungs } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function Vital() {
	return (
		<>
			<section className='vitals'>
				<h2>CPR</h2>
				<ul className='vitals-list'>
					<p>
						<FontAwesomeIcon icon={faLocationDot} className='vitals-icon' />
						Location: Toronto
					</p>

					<p>
						<FontAwesomeIcon icon={faCalendarDays} className='vitals-icon' />
						Date: 2023-02-16
					</p>
					<p>
						<FontAwesomeIcon icon={faHeartPulse} className='vitals-icon' />
						Pulse: 85/bpm
					</p>
					<p>
						<FontAwesomeIcon icon={faLungs} className='vitals-icon' />
						Respiration: 12/bpm
					</p>
					<p>
						<FontAwesomeIcon
							icon={faTemperatureThreeQuarters}
							className='vitals-icon'
						/>
						Skin: Warm and Dry
					</p>
					<p>
						<FontAwesomeIcon icon={faEye} className='vitals-icon' />
						Pearl: True
					</p>
					<p>
						<FontAwesomeIcon icon={faPen} className='vitals-icon' />
						Extra Notes:{' '}
					</p>
				</ul>
			</section>
		</>
	);
}
