import DownTimer from "./Components/DownTimer"
function CountTimer() {
	function handleTimeFinish() {
		console.log('Time is up!')
	}
	return (
		<div>
			<DownTimer initialTime={10} onTimeFinish={handleTimeFinish} />
		</div>
	)
}

export default CountTimer