import React, { useState } from 'react';

import '../index.css';

export default function CPR({ setIsAdult, setIsChild, setIsInfant }) {
	const [selectedAge, setSelectedAge] = useState('');

	//Functions for onClick
	function setAdultClick() {
		setSelectedAge('Adult');
		setIsAdult(true);
	}
	function setChildClick() {
		setSelectedAge('Child');
		setIsChild(true);
	}
	function setInfantClick() {
		setSelectedAge('Infant');
		setIsInfant(true);
	}
	if (!selectedAge) {
		return (
			<section className='container'>
				<ul className='emergencies-button'>
					<button type='button' onClick={() => setAdultClick()}>
						Adult 15yrs +
					</button>
					<button type='button' onClick={() => setChildClick()}>
						Child 2-15yrs
					</button>
					<button type='button' onClick={() => setInfantClick()}>
						Infant -2yrs
					</button>
				</ul>
			</section>
		);
	}

	if (selectedAge) {
		return (
			<section className='container'>
				<ol className='cpr-steps'>
					{selectedAge === 'Adult' && (
						<>
							<li> Make sure the scene if safe for you to approach. </li>
							<li>
								{' '}
								CPR is required if the casualty has no pulse or respirations.{' '}
							</li>
							<li>
								{' '}
								If you do not know the person DO NOT do mouth breathes, simply
								pause for a few seconds before continuing chest compressions.{' '}
							</li>
							<li>
								{' '}
								If you get very tired you must STOP. DO NOT put yourself in
								danger.{' '}
							</li>
							<li>
								{' '}
								Place both your hands on their chest as shown in the picture
								above.{' '}
							</li>
							<li>
								{' '}
								Push approximately ⅓ the depth of the chest or 2 inches.{' '}
							</li>
							<li>
								{' '}
								After 30 compressions administer mouth breaths or take a pause
								for a few seconds.{' '}
							</li>
							<li> STOP once you see signs of life or help arrives </li>
						</>
					)}
					{selectedAge === 'Child' && (
						<>
							<li> Make sure the scene if safe for you to approach. </li>
							<li>
								{' '}
								CPR is required if the casualty has no pulse or respirations.{' '}
							</li>
							<li>
								{' '}
								If you do not know the person DO NOT do mouth breathes, simply
								pause for a few seconds before continuing chest compressions.{' '}
							</li>
							<li>
								{' '}
								If you get very tired you must STOP. DO NOT put yourself in
								danger.{' '}
							</li>
							<li>
								{' '}
								Place one of your hands on their chest as shown in the picture
								above.{' '}
							</li>
							<li> Push approximately ⅓ the depth of the chest or 1 inch. </li>
							<li>
								{' '}
								After 30 compressions administer mouth breaths or take a pause
								for a few seconds.{' '}
							</li>
							<li> STOP once you see signs of life or help arrives </li>
						</>
					)}
					{selectedAge === 'Infant' && (
						<>
							<li> Make sure the scene if safe for you to approach. </li>
							<li>
								{' '}
								CPR is required if the casualty has no pulse or respirations.{' '}
							</li>
							<li>
								{' '}
								If you do not know the person DO NOT do mouth breathes, simply
								pause for a few seconds before continuing chest compressions.{' '}
							</li>
							<li>
								{' '}
								If you get very tired you must STOP. DO NOT put yourself in
								danger.{' '}
							</li>
							<li>
								{' '}
								Place two fingers on their chest as shown in the picture above.{' '}
							</li>
							<li>
								{' '}
								Push approximately ⅓ the depth of the chest or 1/2 inch.{' '}
							</li>
							<li>
								{' '}
								After 30 compressions administer mouth breaths or take a pause
								for a few seconds.{' '}
							</li>
							<li> STOP once you see signs of life or help arrives </li>
						</>
					)}
				</ol>
			</section>
		);
	}
}
