import '../../index.css';
import React from 'react';

export default function ExtraNotes(props) {
	const { setSelectedMonitor } = props;

	return (
		<main className='Monitor'>
			<section className='container'>
				<ul className='extraNotes-steps'>
					<p>Please input any extra information or notes here.</p>
				</ul>
			</section>
			<form>
				<input type='text' />{' '}
				<button className='submit-button' type='submit'></button>{' '}
			</form>
			<button className='back-monitor' onClick={() => setSelectedMonitor(4)}>
				BACK
			</button>
		</main>
	);
}
