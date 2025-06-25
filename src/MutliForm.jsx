import { useState, useRef } from "react";
function MutliForm() {
	const formData = useRef([null, null, null, null]);
	const inputRefs = useRef([null, null, null, null]);
	const [count, setCount] = useState(0);
	const [error, setError] = useState("");
	function handleInput(idx) {
		return (e) => {
			inputRefs.current[idx] = e;
		}
	}
	function handlePrevDef(e) {
		e.preventDefault();
	}
	function handleBack() {
		if (inputRefs.current[count]) {
			formData.current[count] = inputRefs.current[count].value;
		}
		setCount(p => p - 1);
	}
	function handleNext() {
		let valid = true;
		let data = inputRefs.current[count]?.value || "";
		if (!count && !validateName(data)) {
			setError("Name cannot be empty");
			valid=false;
		}
		if (count == 1 && !validateEmail(data)) {
			setError("Invalid email format");
			valid=false;
		}
		if (count == 2 && !validateBirthDate(data)) {
			setError("Enter a valid Birthdate");
			valid=false;
		}
		if (valid) {
			setError("");
			formData.current[count] = data;
			setCount(p => p + 1);
		}
	}
	function handleSubmit() {
		let data = inputRefs.current[count]?.value || "";
		if (!validatePassword(data)) {
			setError("Password must be at least 6 characters long and contain a number");
			return;
		}
		formData.current[3] = data;
		console.log(formData.current);
	}
	/* validation function */
	function validateName(name) {
		return name.trim() !== "";
	}
	function validateEmail(email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}
	function validateBirthDate(birthDate) {
		if (!birthDate) return false;
		const date = new Date(birthDate);
		const today = new Date();
		const minAge = 18;
		const maxAge = 65;
		const age = today.getFullYear() - date.getFullYear();
		return age >= minAge && age <= maxAge;
	}
	// atleast 6 char number also present
	function validatePassword(password) {
		return password.length >= 6 && /\d/.test(password);
	}
	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			{!count &&
				<div className="flex flex-col">
					<form onSubmit={handlePrevDef}>
						{error && <div className="text-red-500 text-sm mb-2">{error}</div>}
						<h1>Name</h1>
						<input
							ref={handleInput(0)} className="border-2" type="text" placeholder="Enter your name" defaultValue={formData.current[0] || ""} />
						<button onClick={handleNext} className="m-2 bg-amber-300 border-2">Next</button>
					</form>
				</div>
			}
			{count === 1 &&
				<div className="flex flex-col">
					<p onClick={handleBack} className="text-blue-500 underline hover:text-blue-400">{"<Back"}</p>
					<form onSubmit={handlePrevDef}>
						{error && <div className="text-red-500 text-sm mb-2">{error}</div>}
						<h1>Email</h1>
						<input ref={handleInput(1)} className="border-2" type="email" placeholder="Enter your email" defaultValue={formData.current[1] || ""} />
						<button onClick={handleNext} className="m-2 bg-amber-300 border-2">Next</button>
					</form>
				</div>
			}
			{count === 2 &&
				<div className="flex flex-col">
					<p onClick={handleBack} className="text-blue-500 underline hover:text-blue-400">{"<Back"}</p>
					<form onSubmit={handlePrevDef}>
						{error && <div className="text-red-500 text-sm mb-2">{error}</div>}
						<h1>BirthDate</h1>
						<input ref={handleInput(2)} className="border-2" type="date" placeholder="Enter your birthdate" defaultValue={formData.current[2] || ""} />
						<button onClick={handleNext} className="m-2 bg-amber-300 border-2">Birthdate</button>
					</form>
				</div>
			}
			{count === 3 &&
				<div className="flex flex-col">
					<p onClick={handleBack} className="text-blue-500 underline hover:text-blue-400">{"<Back"}</p>
					<form onSubmit={handlePrevDef}>
						{error && <div className="text-red-500 text-sm mb-2">{error}</div>}
						<h1>Password</h1>
						<input ref={handleInput(3)} className="border-2" type="password" placeholder="Enter your password" required defaultValue={formData.current[3] || ""} />
						<button type="button" onClick={handleSubmit}
							className="m-2 bg-amber-300 border-2">Submit</button>
					</form>
				</div>
			}
		</div>
	)
}
export default MutliForm