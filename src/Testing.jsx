// import { useState } from 'react';
// 
// const loginFormElements = [
// 	{
// 		name: 'email',
// 		id: 'email',
// 		placeholder: 'Enter your email',
// 		label: 'Email',
// 		ComponentType: 'input',
// 		type: 'email'
// 	},
// 	{
// 		name: 'password',
// 		id: 'password',
// 		placeholder: 'Enter your password',
// 		label: 'Password',
// 		ComponentType: 'input',
// 		type: 'password'
// 	}
// ];
// 
// const registerFormElements = [
// 	{
// 		name: 'name',
// 		id: 'name',
// 		placeholder: 'Enter your name',
// 		label: 'Name',
// 		ComponentType: 'input',
// 		type: 'text'
// 	},
// 	{
// 		name: 'email',
// 		id: 'email',
// 		placeholder: 'Enter your email',
// 		label: 'Email',
// 		ComponentType: 'input',
// 		type: 'email'
// 	},
// 	{
// 		name: 'password',
// 		id: 'password',
// 		placeholder: 'Enter your password',
// 		label: 'Password',
// 		ComponentType: 'input',
// 		type: 'password'
// 	}
// ];
// 
// function CommonInput({ label, name, id, type, placeholder, value, onChange }) {
// 	return (
// 		<div className='form-container'>
// 			<label htmlFor={id}>{label}</label>
// 			<div className='form-group'>
// 			<input
// 				name={name}
// 				id={id}
// 				type={type || "text"}
// 				placeholder={placeholder || "Enter value here"}
// 				value={value}
// 				onChange={onChange}
// 			/>
// 			
// 				</div>
// 		</div>
// 	);
// }
// 
// const formTypes = {
// 	INPUT: 'input',
// 	SELECT: 'select',
// 	TEXTAREA: 'textarea'
// };
// 
// function CommanForm({ formControls = [], formData, setFormData,buttonText,onHandleSubmit}) {
// 	function renderFormElement(getCurrentElement) {
// 		switch (getCurrentElement?.ComponentType) {
// 			case formTypes.INPUT:
// 				return (
// 					<CommonInput
// 						label={getCurrentElement.label}
// 						name={getCurrentElement.name}
// 						placeholder={getCurrentElement.placeholder}
// 						id={getCurrentElement.id}
// 						type={getCurrentElement.type}
// 						value={formData[getCurrentElement.name]}
// 						onChange={(event) => {
// 							setFormData({
// 								...formData,
// 								[event.target.name]: event.target.value
// 							});
// 						}}
// 					/>
// 				);
// 			default:
// 				return (
// 					<CommonInput
// 						label={getCurrentElement.label}
// 						name={getCurrentElement.name}
// 						placeholder={getCurrentElement.placeholder}
// 						id={getCurrentElement.id}
// 						type={getCurrentElement.type}
// 						value={formData[getCurrentElement.name]}
// 						onChange={(event) => {
// 							setFormData({
// 								...formData,
// 								[event.target.name]: event.target.value
// 							});
// 						}}
// 					/>
// 				);
// 		}
// 	}
// 
// 	return (
// 		<form onSubmit={onHandleSubmit}>
// 			{formControls.length
// 				? formControls.map((element, index) => (
// 					<div key={index}>{renderFormElement(element)}</div>
// 				))
// 				: null}
// 			<div style={{ marginTop: '12px' }}>
// 				<button type="submit" className='button'>
// 					{buttonText || 'Submit'}
// 				</button>
// 			</div>
// 		</form>
// 	);
// }
// 
// 
// const initialFormData = {
// 	email: '',
// 	password: ''
// }
// function Login() {
// 	const [loginFormData, setLoginFormData] = useState(initialFormData);
// 	function onHandleSubmit(event) {
// 		event.preventDefault();
// 		console.log("🚀 ~ Login ~ loginFormData:", loginFormData)
// 		// api logic here & database logi
// 		setLoginFormData(initialFormData)
// 	}
// 	return (
// 		<>
// 			<h2>Login</h2>
// 			<CommanForm
// 				formControls={loginFormElements}
// 				formData={loginFormData}
// 				setFormData={setLoginFormData}
// 				buttonText={'Login'}
// 				onHandleSubmit={onHandleSubmit}
// 				/>
// 		</>
// 	);
// }
// 
// 
// 
// const initialRegisterFormData = {
// 	name:'',
// 	email:'',
// 	password:''
// }
// function Register() {
// 	const [registerFormData,setRegisterFormData] = useState(initialRegisterFormData)
// 	function onHandleSubmit(event) {
// 		event.preventDefault();
// 		console.log("🚀 ~ Register ~ registerFormData:", registerFormData)
// 		// api logic here & database logi
// 		setRegisterFormData(initialRegisterFormData)
// 	}
// 	return (
// 		<>
// 			<h2>Register</h2>
// 			<CommanForm
// 				formControls={registerFormElements}
// 				formData={registerFormData}
// 				setFormData={setRegisterFormData}
// 				buttonText={'Register'}
// 				onHandleSubmit={onHandleSubmit}
// 				/>
// 		</>
// 	);
// }
// 
// export default Login;
// export { Register, CommanForm, CommonInput };


import { useState, useCallback,memo } from 'react'
const Child = memo(function Child({ learn, count }) {
	console.log("Child Component");
	return (
		<>
			<h1 className='flex flex-col justify-center items-center'>cool</h1>
			{learn}
			<h1>
				{count}
			</h1>
		</>
	);
});

function Testing() {
	const [add, setAdd] = useState(0);
	const [count, setCount] = useState(0);

	const learn = useCallback(() => {
		console.log('yes');
	}, []); // This stays the same across renders

	return (
		<div className='form-container flex flex-row justify-center items-center gap-4'>
			<div>
				<button className='button' onClick={() => setAdd(add + 1)}>
					Add
				</button>
				<h1>{add}</h1>
			</div>

			<div>
				<Child learn={learn} count={count}/>
				<button className='button' onClick={() => setCount(count + 2)}>
					Count
				</button>
			</div>
		</div>
	);
}

export default Testing
