import { useState, useEffect } from 'react';
function ShoppingList() {
	const [items, setItems] = useState([]);
	const [input, setInput] = useState('');	
	const [bucketList, setBucketList] = useState([]);
	function handleInput(e) {
		setInput(e.target.value);
	}
	function handleOk(e) {
		console.log("ok ",e);
	}
	function handleCross(e) {
		console.log(e);
	}
	async function handleFetch(e) {
		console.log(e);
		const url = `https://api.frontendeval.com/fake/food/${e}`;
		const result = await fetch(url);
		const data = await result.json();
		setItems(data);
	}
	useEffect(() => {
		if (input.length >= 2) {
			handleFetch(input);
		}
	}, [input]);
	function addToBucket(idx) {
		setBucketList(prev => {
			const newList = [...prev, items[idx]];
			return newList.filter((item, i) => newList.indexOf(item) === i);
		});
	}
	
	return (
		<div className='bg-gray-100 h-screen'>
			<div className='flex flex-col items-center '>
				<h1 className='text-3xl flex my-2 py-2 font-bold shadow-sm w-full items-center justify-center'>My Shopping List</h1>
				<input className='cursor-pointer my-10 w-[300px] overflow-x-auto px-4 py-2  border-2 border-gray-700 shadow-3xl rounded-md 
              text-center placeholder-gray-700 text-l bg-amber-200 text-black placeholder:text-sm font-bold 
              hover:bg-gray-200 transition duration-200 ' onChange={handleInput} type="text" placeholder="Add an item" value={input} />
			</div>
			{input.length >= 2 && items.length > 0 ? (
				<div className='w-[500px] max-h-[200px] overflow-y-auto rounded-md bg-white shadow-inner p-2 mx-auto'>
					{items.map((item, idx) => (
						<div key={idx} onClick={() => addToBucket(idx)}  className='m-2 text-black bg-gray-200 font-semibold py-1 px-4 rounded-md flex items-center justify-between '>
							<span className='text-gray-900'>{item}</span>
							<div className='flex items-center space-x-4 py-1'>
								<button onClick={e => { e.stopPropagation(); handleOk(idx);}} className='cursor-pointer hover:'>+</button>
								<button onClick={e => { e.stopPropagation(); handleCross(idx); }} className='cursor-pointer hover:'>-</button>
							</div>
						</div>
					))}

				</div>
			) : ""};
			<div className='flex flex-col items-center justify-center my-5'>
				<h1 className='text-2xl font-bold'>Bucket List</h1>
				{bucketList.length > 0 ? (
					<div className='w-[500px] max-h-[200px] overflow-y-auto rounded-md bg-white shadow-inner p-2 mx-auto'>
						{bucketList.map((item, key) => (
							<div key={key} className='m-2 text-white bg-red-500 font-semibold py-2 px-4 rounded-md flex items-center justify-between'> {item} </div>
						))}
					</div>
				) : null}
			</div>
		</div>
	)
}
export default ShoppingList
