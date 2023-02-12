import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
	const { seconds, minutes } = useStopwatch({ autoStart: true });
	const formatTime = time => {
		return String(time).padStart(2, '0');
	};
	return (
		<div style={{ textAlign: 'center' }}>
			<div style={{ fontSize: '30px', fontFamily: 'Oswald' }}>
				<span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
			</div>
		</div>
	);
}

export default function Timer({ isActive, seconds, setSeconds }) {
	return (
		<div>
			<MyStopwatch />
		</div>
	);
}
