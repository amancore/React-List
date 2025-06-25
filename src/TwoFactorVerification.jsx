import { useState, useRef} from 'react';
import styles from './styles/TwoFactorVerification.module.css';

function TwoFactorVerification() {
	const inputRefs = useRef([null, null, null, null]);
	const [code, setCode] = useState(['', '', '', '']);
	function handleChange(e, idx) {
		const data = e.target.value;
		const regex = /^[0-9]$/;
		if (!regex.test(data)) return;
		const newCode = [...code];
		newCode[idx] = data;
		console.log(idx);
		setCode(newCode);

		// move focus
		if (data && idx < inputRefs.current.length - 1) {
			inputRefs.current[idx + 1]?.focus();
		}
	}
	function handleSubmit() {
		const code = inputRefs.current.map((p) => p.value).join('');
		if (code === "1234") {
			alert("Success");
		} else {
			alert("Invalid code");
		}
	}
	// handle backspace
	function handleKeyDown(e, idx) {
		if (e.key === "Backspace") {
			inputRefs.current[idx].value = '';
			setCode(prev => {
				const newCode = [...prev];
				newCode[idx] = '';
				if (idx > 0) {
					inputRefs.current[idx - 1].focus();
				}
				return newCode;
			});
			inputRefs.current[idx - 1].focus();
		}
		if(e.key === "ArrowLeft") {
			inputRefs.current[idx - 1].focus();
		}
		if(e.key === "ArrowRight") {
			inputRefs.current[idx + 1].focus();
		}
	}
	function handlePaste(e) {
		const clipdata = e.clipboardData.getData('text');
		const newCode = [...code];
		for (let i = 0; i < clipdata.length; i++) {
			newCode[i] = clipdata[i];
			if (inputRefs.current[i]) {
				inputRefs.current[i].value = clipdata[i];
				inputRefs.current[i].focus();
			}
		}
		console.log("code", clipdata, newCode);
	} 
	// document.documentElement.style.setProperty('--text-color', textColor);
	return (
		<div className={styles.app}>
			<h1>Two Factor Verification</h1>
			<div className={styles.inputContainer}>
				{code.map((p, i) => (
					<input
						key={i}
						type="text"
						ref={(e) => (inputRefs.current[i] = e)}
						maxLength={1}
						onChange={(e) => handleChange(e, i)}
						onKeyDown={(e) => handleKeyDown(e, i)}
						onPaste={handlePaste}
						value={p}
					/>
				))}
			</div>
			<button onClick={handleSubmit} className={styles.button}>
				Verify
			</button>
		</div>
	);
}

export default TwoFactorVerification
