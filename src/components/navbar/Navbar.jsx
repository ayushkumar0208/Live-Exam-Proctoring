import React from 'react';
import logo from './../../assets/logofont.svg';
import './navbar.css';

const NavLinks = () => (
	<React.Fragment>
		<p>
			<a className='options-navbar' href="/">Create</a>
		</p>
		<p>
			<a className='options-navbar' href="/instruction">Join</a>
		</p>
		<p>
			<a className='options-navbar' href="/">About Us</a>
		</p>
		<p>
			<a className='options-navbar' href="/login">Login</a>
		</p>
	</React.Fragment>
);

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-navbar-logo">
				{/* <img src='Logo.jpeg' alt="aankh-logo" /> */}
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;
