import logo from '../assets/picofme (1).png'
import '../index.css'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();

	return (
		<div className="navbar">
			<img src={logo} alt="" width={50} />
			<ul>
				<NavLink to="/">
					<li>Home</li>
				</NavLink>
				<NavLink to="/product">
					<li>Products</li>
				</NavLink>
				<NavLink to="about/">
					<li>About</li>
				</NavLink>
				<NavLink to="/contact">
					<li>Contact</li>
				</NavLink>
				<NavLink to="/jobs">
					<li>Jobs</li>
				</NavLink>
			</ul>
			<button onClick={() => navigate('/contact', { raplace: true })}>Get Started</button> {/* replace:true */}
		</div>
	);
}

export default Navbar