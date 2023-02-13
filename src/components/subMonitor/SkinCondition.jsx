import '../../index.css';
import React from 'react';

export default function SkinCondition(props) {

	const { setSelectedMonitor, setIsRespirations, setIsPupils, setIsSkinCon } =
		props;

	return (
		<main className='Monitor'>
			<section className='instructions'>
				<ol className='instruction-steps'>
					<li>Using the back of your hand, place it on their forehead.</li>
					<li>Pay attention to temperature, is the person cool or warm?</li>
					<li>
						Pay attention to the moisture level, is the person dry or sweaty?
					</li>
				</ol>
			</section>
		 <form><input type="text" className ='monitor-text' placeholder='Input Here'/> </form>
			<button
				className='back-monitor'
				onClick={() => {
					setSelectedMonitor(2);
					setIsRespirations(true);
					setIsSkinCon(false);
				}}
			>
				BACK
			</button>
			<button
				className='next-monitor'
				onClick={() => {
					setSelectedMonitor(4);
					setIsPupils(true);
					setIsSkinCon(false);
				}}
			>
				NEXT
			</button>
		</main>
	);

}
