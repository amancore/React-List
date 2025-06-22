import { useState } from "react"
function UndoCounterApp() {
	const [count, setCount] = useState(0);
	const [history, setHistory] = useState([]);
	const [future , setFuture] = useState([]);
	function showTapButton(e) {
		if (!e) return;
		let num;
		if (e[0] === '+') num = parseInt(e.substr(1));
		else num = -parseInt(e.substr(1));
 		setHistory(prev => [[num, count, num+count], ...prev])
		setCount(p => p + num);
	}
	function redo(){
		if(history.length === 0) return;
		const [first,...rest] = history;
		const [, oldCount] = first;
		console.log(first,oldCount)
		setCount(oldCount);
		setHistory(rest);
		setFuture(prev => [first, ...prev]);
	}
	function undo() {
		if(future.length === 0) return;
		const [first, ...rest] = future;	
		const [, oldCount] = first;
		setCount(oldCount);
		setFuture(rest);
		setHistory(prev => [first, ...prev]);
	}
	return (
		<div className="flex flex-col items-center justify-center bg-gray-100">
			<h1 className="text-3xl font-bold shadow-sm w-full text-center py-3">UndoCounterApp</h1>
			<div>
				<button onClick={redo}  className="m-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">Undo</button>
				<button onClick={undo} className="mx-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">Redo</button>
			</div>
			<div className="flex flex-row items-center justify-center w-full">
				<button className='m-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer' onClick={() => showTapButton("-100")}>-100</button>
				<button className='m-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer' onClick={() => showTapButton("-10")}>-10</button>
				<button className='m-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer' onClick={() => showTapButton("-1")}>-1</button>
				<span className="text-3xl mx-16 font-semibold text-center justify-center w-[100px]">{count}</span>
				<button className='m-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer' onClick={() => showTapButton("+1")}>+1</button>
				<button className='m-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer' onClick={() => showTapButton("+10")}>+10</button>
				<button className='m-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer' onClick={() => showTapButton("+100")}>+100</button>
			</div>

			<div className="flex flex-col items-center">
				<h1 className="p-3 py-2 my-5 w-[200px] justify-center text-center rounded-md bg-blue-500 text-white text-2xl">History</h1>
				<div className="w-[300px] max-h-[500px] overflow-y-auto bg-white rounded-md shadow-inner p-2">
					{history.length === 0 ? "" : history.map((item, index) => (
						<span key={index} className="m-2 bg-gray-200 text-black font-semibold py-1 px-4 rounded-md flex flex-row items-center justify-between">
							<span className="ml-2 text-gray-900">{item[0]}</span>
							<span className="flex text-gray-600">({item[1]}</span>
							<span className="flex text-gray-600">{"->"}</span>
							<span className="flex text-gray-600">{item[2]})</span>
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default UndoCounterApp