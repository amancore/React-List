import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar';
function RootLayout() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
		</div>
	)
}

export default RootLayout