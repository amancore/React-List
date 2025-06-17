import { useState, useEffect } from "react";

function App() {
	const [isStart, setIsStart] = useState(0);
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(0);
	const [pause, setPause] = useState(0);

	const handleInput = (e) => {
		const { value, name } = e.target;
		if (name === 'hour') setHour(Number(value));
		else if (name == 'minute') setMinute(Number(value));
		else setSecond(Number(value));
	};
	const runTimer = () => {
		if (isStart && !pause && (hour > 0 || minute > 0 || second > 0)) {
			if (second > 0) {
				setSecond((s) => s - 1);
			} else if (minute > 0) {
				setMinute((m) => m - 1);
				setSecond(59);
			} else if (hour > 0) {
				setHour((h) => h - 1);
				setMinute(59);
				setSecond(59);
			}
		}
		if (hour === 0 && minute === 0 && second === 0 && isStart) {
			alert("Time's up!");
			handleReset();
		}
	};
	const handleStart = () => {
		if (hour === 0 && minute === 0 && second === 0) {
			alert("Please set a valid time.");
			return;
		}
		setIsStart(1);
		setPause(0);
	}
	const handleReset = () => {
		setHour(0);
		setMinute(0);
		setSecond(0);
		setPause(0);
		setIsStart(0);
	};
	const handlePause = () => {
		setPause(p => !p);
	}
	useEffect(() => {
		if (!isStart || pause) return; // Only run when timer is running
		const time = setInterval(runTimer, 1000);
		return () => clearInterval(time);
	});

	return (
		<>
			<div>
				<h1 className="text-3xl font-bold shadow-sm p-2 flex justify-center">
					Countdown Timer
				</h1>
				{!isStart &&
					<div>
						<div className="flex flex-row justify-center my-5 gap-5">
							<input onChange={handleInput}
								className="cursor-pointer my-10 w-[100px] overflow-x-auto px-4 py-2  border-2 border-gray-700 shadow-3xl rounded-md 
              text-center placeholder-gray-700 text-xl bg-amber-200 text-black placeholder:font-normal font-bold 
              hover:bg-gray-200 transition duration-200"
								type="number"
								min="0"
								placeholder="HH"
								name="hour"
							/>
							<span className="text-4xl text-gray-400 my-10 flex items-center self-center ">:</span>
							<input onChange={handleInput}
								className="cursor-pointer my-10  w-[100px] overflow-x-auto px-4 py-2  border-2 border-gray-700 shadow-3xl rounded-md 
								text-center placeholder-gray-700 text-xl bg-amber-200 text-black placeholder:font-normal font-bold
								hover:bg-gray-200 transition duration-200"
								type="number"
								min="0"
								placeholder="MM"
								name="minute"
							/>
							<span className="text-4xl text-gray-400 my-10 flex items-center self-center">:</span>
							<input onChange={handleInput}
								className="cursor-pointer my-10 w-[100px] overflow-x-auto px-4 py-2  border-2 border-gray-700 shadow-3xl rounded-md 
								text-center placeholder-gray-700 text-xl bg-amber-200 text-black placeholder:font-normal font-bold
								hover:bg-gray-200 transition duration-200"
								type="number"
								min="0"
								placeholder="SS"
								name="second"
							/>
						</div>
						<div className="flex flex-row justify-center">
							<button onClick={handleStart}
								className="cursor-pointer w-[100px] px-4 py-2 border-2 border-gray-700 rounded-md text-xl bg-green-200 text-gray-700 hover:bg-red-200" >
								Start
							</button>
						</div>
					</div>
				}
				<div>
					{isStart && (
						<div className="flex flex-col justify-center items-center mt-10">
							<div className="flex flex-row text-5xl space-x-2 items-center m-5">
								<div>{hour.toString().padStart(2, '0')}</div>
								<span className="text-gray-400">:</span>
								<div >{minute.toString().padStart(2, '0')}</div>
								<span className="text-gray-400">:</span>
								<div>{second.toString().padStart(2, '0')}</div>
							</div>
							<div className="flex flex-row justify-center m-10 space-x-4">
								<button onClick={handlePause} className="px-4 py-2 bg-yellow-300 border-2 border-gray-700 rounded-md text-xl text-gray-700 hover:bg-yellow-200 cursor-pointer">
									{pause ? "Resume" : "Pause"}
								</button>
								<button onClick={handleReset} className="px-4 py-2 bg-red-300 rounded-md border-2 border-gray-700 text-xl text-gray-700 hover:bg-red-200 cursor-pointer">Reset</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
   