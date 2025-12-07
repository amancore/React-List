import React, { useEffect, useRef, useState } from 'react'

function DownTimer({ initialTime, onTimeFinish }) {
	const [time, setTime] = useState(initialTime);
	const [isRun, isSetRun] = useState(false); // on page run it will run 
	const intervalRef = useRef(null);

	// pause , resume , reset , start 
	useEffect(() => {
		if (isRun) {
			// manage the interval here using the set interval 
			intervalRef.current = setInterval(() => {
				setTime(p => {
					if (p == 0) {
						clearInterval(intervalRef.current); // stop the timer  
						isSetRun(false); // stop the timer state 
						if (onTimeFinish) {  // checks here that has the parent given the function or not
							onTimeFinish();
							setTime(initialTime); // reset the timer to initial time
						}
						return 0;
					}
					return p - 1;
				});
			}, 1000);
		} else {
			// clear the interval when its false
			clearInterval(intervalRef.current);
		}

	}, [initialTime, isRun, onTimeFinish]);
	function handleResume() {
		setTime(initialTime);
		isSetRun(false);
	}
	return (
		<div>
			<h1>{time}</h1>
			<button className='cursor-pointer w-20 border-2' onClick={() => isSetRun(!isRun)}>
				{isRun ? 'Pause' : 'Start'}
			</button>
			<button onClick={handleResume} className='cursor-pointer w-20 border-2'>restart</button>
		</div>
	)
}
export default DownTimer