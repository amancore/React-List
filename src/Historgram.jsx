import { useState, useEffect } from 'react';
import '../src/styles/histogram.css'
function Historgram() {
	const [freq, setFreq] = useState([]);
	const [yAxis, setYAxis] = useState([]);
	const [loading, setLoading] = useState(false);
	async function fetchData() {
		setLoading(true);
		try {
			const url = 'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new';
			const data = await fetch(url);
			const result = await data.text();
			const temp = result.split('\n').filter(Boolean);
			console.log(temp);
			const map = {};
			temp?.forEach((item) => {
				map[item] = map[item] ? map[item] + 1 : 1;
			});
			setFreq(map);
			console.log(map);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		if (freq) {
			const max = Math.max(...Object.values(freq));
			const mx = Math.ceil(max / 10) * 10;
			let arr = []
			for (let i = (mx / 10); i >= 0; i--) {
				// 3, 2, 1, 0
				arr.push(i * 10); // 30 , 20 , 10 , 0
			}
			setYAxis(arr);
		}
	}, [freq])
	useEffect(() => {
		fetchData()
	}, []);
	return (
		<div className='App'>
			<div className='container'>
				<div className='box'>
					<div className='box-y-axis' style={{ height: `${yAxis && yAxis[0]}%` }}>
						{
							yAxis?.map((val, idx) => (
								<div key={idx}>
									<span>{val}</span>
								</div>
							))
						}
					</div>
						{freq&&Object.entries(freq)?.map(([key, value]) => (
							<div className='box-x-axis' key={key}>
								<div className='box-x-axis-inner'>
									<span>{key}</span>
									<div className='box-x-axis-inner-bar' style={{ height: `${value}%` }}></div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default Historgram