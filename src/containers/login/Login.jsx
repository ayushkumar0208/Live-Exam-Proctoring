import React from 'react';
import logo from './../../assets/logofont.svg';
import NavBar from '../../components/navbar/Navbar.jsx'
import './login.css';


const Login = () => {
	return (
		<div className="user-login">
			<NavBar/>
			<div className="logo">
				{/* <img src={logo} alt="logo" /> */}
			</div>
			<div className="login-form">
				<h1 className="login-title-heading">User Login</h1>
				<div className="input-fields">
					<input type="text" placeholder='Email' />
					<input type='password' placeholder='Password'/>
				</div>
				<a href="/">
					<button id='okay-button'>Login</button>
				</a>
			</div>
		</div>
	);
};

export default Login;
