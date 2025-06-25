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
