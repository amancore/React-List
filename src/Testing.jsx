import { useState, useEffect } from 'react';
function Testing() {
	const [items, setItems] = useState([]);
	const [input, setInput] = useState('');
	function handleInput(e) {
		setInput(e.target.value);
		console.log("🚀 ~ handleInput ~ input:", e.target.value);
	}
	async function handleFetch(e) {
		console.log(e);
		const url = `https://api.frontendeval.com/fake/food/${e}`;
		const result = await fetch(url);
		const data = await result.json();
		setItems(p => [...p, data]);
	}

	useEffect(() => {
		if (input.length >= 2) {
			handleFetch(input);
		}
	}, [input]);
	return (
		<div className='h-screen'>
			<div className='flex flex-col items-center '>
				<h1 className='text-3xl flex my-2 py-2 font-bold shadow-sm w-full items-center justify-center'>My Shopping List</h1>
				<input className='cursor-pointer my-10 w-[300px] overflow-x-auto px-4 py-2  border-2 border-gray-700 shadow-3xl rounded-md 
								text-center placeholder-gray-700 text-l bg-amber-200 text-black placeholder:text-sm font-bold 
								hover:bg-gray-200 transition duration-200 ' onChange={handleInput} type="text" placeholder="Add an item" />
			</div>
			{input.length >= 2 ? <div className='w-[500px] max-h-[200px] cursor-pointer overflow-y-auto rounded-md shadow-inner p-2 mx-auto'>
				{items.map((item, key) => (
					<span key={key}>{item}</span>
				))}
			</div> : null}
		</div>
	)
}
export default Testing


/* 
	{input.length >= 2 ? (
				<div className='w-[500px] max-h-[200px] cursor-pointer overflow-y-auto rounded-md shadow-inner p-2 mx-auto'>
					{items.map((item, key) => (
						<div key={key} onClick={() => handleShopping(key)} className='m-2 text-black font-semibold py-1 px-4 rounded-md flex items-center justify-between bg-gray-200 hover:bg-green-300'>
							<span className='text-gray-900'>{item}</span>
							{/* <div className='flex items-center space-x-4 '>
									<button onClick={()=>handleStrike(key)} className='font-semibold cursor-pointer'>✓</button>
									<button onClick={()=>handleCut(key)} className='text-red-500 font-semibold py-1 rounded-md transition duration-300 ease-in-out cursor-pointer'>X</button>
								</div> 
								</div >
							))}
						</div >
					}
{/* <div className='flex flex-col items-center justify-center my-5'>
						<h1 className='text-2xl font-bold'>Bucket List</h1>
						<div className='w-[300px] max-h-[500px] overflow-y-auto bg-green-700 rounded-md shadow-inner p-2'>
							list
							</div>
					</div> */
/*

*/