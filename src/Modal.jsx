import { useState } from 'react'
function Modal() {
	const [model, setModel] = useState(true)
	const [cut, setCut] = useState(false)
	return (
		<div className='relative flex justify-center items-center h-screen bg-red-500'>
			{!cut ? (
				<div className="w-full h-full flex justify-center items-center">
					{model ? (
						<button onClick={() => setModel(0)} className=" flex justify-center bg-yellow-400 font-semibold border-2 py-2 px-2 cursor-pointer rounded-md ">
							show
						</button>
					) : null}
				</div>
			) : <div className='text-white text-xl font-bold'>Offer Accepted</div>}
			{!model && !cut && (
				<div className='absolute flex-col w-100 h-60 bg-green-300 flex justify-center items-center rounded-md'>
					<button>
						<span onClick={() => setModel(1)} className="absolute top-2 right-4 text-red-500 font-bold text-2xl cursor-pointer">X</span>
					</button>
					<p className='text-l font-semibold'>Click the button to accpet our amazing offer</p>
					<button onClick={()=>setCut(1)} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'>
						Accept offer
					</button>
				</div>
			)}
		</div>
	)
}

export default Modal