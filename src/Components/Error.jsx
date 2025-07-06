import { useNavigate, useRouteError } from 'react-router-dom'

function Error() {
	const error = useRouteError();
	const navigate = useNavigate();
	return (
		<div className='job-details flex flex-col items-center'>
			<h3>An Error occured.</h3>
			<p>{error.message}</p>
			<button onClick={() => navigate("/")}>Go To Homepage</button>
		</div>
	);
}

export default Error