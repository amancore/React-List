import { useState } from "react";

function SimpleInterestCal() {
	const [principal, setPrincipal] = useState(0);
	const [interest, setInterest] = useState(0);
	const [time, setTime] = useState(0);
	const [result, setResult] = useState(-1);

	const handleInput = (e) => {
		const { value, name } = e.target;
		if (name === "principal") setPrincipal(Number(value));
		else if (name === "interest") setInterest(Number(value));
		else setTime(Number(value));
	};

	const handleResult = () => {
		if (principal <= 0 || interest <= 0 || time <= 0) {
			alert("Please enter valid values for principal, interest, and time.");
			return;
		}
		setResult(principal + (principal * interest * time) / 100);
	};

	return (
		<div>
			<h1 className="text-3xl font-bold p-2 text-center shadow-sm">Simple Interest Calculator</h1>
			<div className="flex flex-col items-center justify-center">
				<title>Simple Interest Calculator</title>
				<div className="flex flex-col mt-10">
					<div>
						<div className="">
							<h1 className="text-xl font-bold">Principal loan amount</h1>
							<input
								className="border-2 px-4 py-2  border-gray-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-200 placeholder-gray-400 text-sm transition duration-200 placeholder:font-normal font-bold"
								onChange={handleInput}
								name="principal"
								type="number"
								placeholder="Enter principal amount"
								style={{ marginBottom: '10px',marginTop: '5px' }}
							/>
						</div>

						<div className="">
							<h1 className="text-xl font-bold">Interest Rate</h1>
							<div className="flex items-center gap-4">
								<input
									className="border-2 px-4 py-2 pr-6  border-gray-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-200 placeholder-gray-400 text-sm transition duration-200 placeholder:font-normal font-bold"
									style={{ marginBottom: '10px', marginTop: '5px' }}
									onChange={handleInput}
									name="interest"
									type="number"
									placeholder="Enter the interest rate"
								/>
							</div>
						</div>

						<div className="">
							<h1 className="text-xl font-bold text-left">Time Period</h1>
							<input
								className="border-2  mx-auto w-full px-4 py-2  border-gray-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-200 placeholder-gray-400 text-sm transition duration-200 placeholder:font-normal font-bold"
								onChange={handleInput}
								name="time"
								type="number"
								placeholder="Enter the time period"
								style={{marginTop: '5px' }}
							/>
						</div>
					</div>
					<button
						className="cursor-pointer px-4 py-2  border-gray-700 rounded-md text-xl bg-green-200 text-gray-700 font-bold hover:bg-red-200 mt-10"
						onClick={handleResult}
						style={{ marginBottom: '20px' }}
					>
						Calculate
					</button>
				</div>
					{result >= 0 && <h1 className="text-3xl font-bold ">Amount : <span className="text-gray-600">{result}</span></h1>}
			</div>
		</div>
	);
}

export default SimpleInterestCal;
