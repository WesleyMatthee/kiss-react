import '../../index.css';
import React from 'react';

export default function Pearl(props) {

	const { setSelectedMonitor, setIsSkinCon, setIsPupils, setIsHome } = props;


	return (
		<main className='Monitor'>
			<section className='instructions'>
				<ol className='instruction-steps'>
					<li>Cover both of their eyes.</li>
					<li>
						Using either natural sunlight or a phone light, uncover one of their
						eyes and shine the light towards the uncovered eye.
					</li>
					<li>
						Pay attention to the pupil of the individual, it should shrink when
						exposed to light
					</li>
					<li>
						Repeat the previous steps for the other eye and make note if the
						pupils were both equally reactive to light
					</li>
				</ol>
			</section>
			  <form><input type="text" className ='monitor-text' placeholder='Input Here'/> </form>
			<button
				className='back-monitor'
				onClick={() => {
					setSelectedMonitor(3);
					setIsSkinCon(true);
					setIsPupils(false);
				}}
			>
				BACK
			</button>
			<button
				className='next-monitor'
				onClick={() => {
					setSelectedMonitor(5);
					setIsPupils(false);
					setIsHome(true);
				}}
			>
				NEXT
			</button>
		</main>
	);
}
