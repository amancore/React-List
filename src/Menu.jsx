// function Menu() {
// 	return (
// 		<div>
// 			<h1>Menu</h1>
// 			<ul>
// 				<li>Home</li>
// 				<li>About</li>
// 				<li>Services</li>
// 				<li>Contact</li>
// 			</ul>
// 		</div>
// 	)
// }
// 
// export default Menu


// import { useRef } from 'react';
// function Menu() {
// 	const inputRef = useRef(null);
// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		console.log('Submitted value:', inputRef.current.value);
// 	};
// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					ref={inputRef}    // Uncontrolled - DOM manages value
// 				/>
// 				<button type="submit">Submit</button>
// 			</form>
// 		</div>
// 
// 	)
// }
// export default Menu

// Parent Component
// import { useState } from 'react';
// function Menu() {
// 	const [count, setCount] = useState(0);  // State
// 
// 	return (
// 		<ChildComponent
// 			count={count}                      // Prop
// 			onIncrement={() => setCount(count + 1)}  // Prop (callback)
// 		/>
// 	);
// }
// 
// // Child Component
// function ChildComponent({ count, onIncrement }) {
// 	// count and onIncrement are props
// 	// Cannot modify props directly
// 
// 	return (
// 		<div>
// 			<p>Count: {count}</p>
// 			<button onClick={onIncrement}>Increment</button>
// 		</div>
// 	);
// }
// export default Menu;

// import React, { useState, useCallback } from 'react';
// 
// function Menu() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState('');
//    const memoizedHandleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);
// 
//   return (
//     <div>
//       <input 
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <ExpensiveChildComponent onClick={memoizedHandleClick} />
//     </div>
//   );
// }
// export default Menu;