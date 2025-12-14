import { useState, useEffect } from 'react'
function Fetch() {
	const [data, setData] = useState([]);
	const [originalData, setOriginalData] = useState([]);
	async function fetchData() {
		const url = 'https://dummyjson.com/products';
		const result = await fetch(url);
		const data = await result.json();
		setData(data.products);
		setOriginalData(data.products);
	}
	useEffect(() => {
		fetchData();
	}, []);
	const catArray = Array.from(
		new Set(originalData.map(item => item.category))
	);
	catArray.unshift('all');
	function handleCategory(e) {
		const category = e.target.innerText;
		if (category === 'all') {
			setData(originalData);
		} else {
			const filteredData = originalData.filter(item => item.category === category);
			setData(filteredData);
		}
	}
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1>Fetch Component</h1>
			<h2 className='flex flex-col justify-center items-center'>Categories</h2>
			<div className='flex flex-wrap gap-3'>
				{
					catArray.map((category, index) => (
						<button onClick={handleCategory} key={index} className="w-40 h-10 px-4 py-2 border rounded-full bg-white text-gray-700
             hover:bg-black hover:text-white
             transition-all duration-200">{category}</button>
					))	
				}
			</div>
			<div className='grid grid-cols-3 gap-5 p-5'>
				{data.map(item => (
					<div className="flex flex-col items-center border-2 rounded-lg" key={item.id}>
						<h4 className="font-bold !text-red-500">{item.title}</h4>
						<p className='!text-blue-800'>{item.category}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Fetch