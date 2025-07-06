import React, { useState } from 'react'
import Questions from './Components/Questions'
function Accordian() {
	const [click, setClick] = useState(false);
	const temp = [
		{
			id: 1,
			question: 'What is your name?',
			answer: 'My name is John Doe',
		},
		{
			id: 2,
			question: 'What is your age?',
			answer: 'My age is 30',
		},
		{
			id: 3,
			question: 'What is your address?',
			answer: 'My address is 123 Main St',
		},
	]
	return (
		<div className='flex flex-col items-center justify-center h-50 gap-4'>
			<button onClick={() => setClick(p => !p)} className='px-6 py-4 bg-amber-400'>Enable Mutli select</button>
			<Questions temp={temp} click={click} />
		</div>
	)
}

export default Accordian