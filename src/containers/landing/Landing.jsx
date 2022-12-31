import React from 'react';
import { Navbar, CtaButton } from './../../components';
import infinite from './../../assets/infinite.svg';
import './landing.css';

const Landing = () => {
	return (
		<React.Fragment>
			<Navbar />

			<div className="section-type landing-page">
				<div className="heading-container-main">
					<div className="heading-container-1">
						<div className="landing-content">
							<div className="headings">
								<span className="sub-text">Conduct credible online </span>
								<span className="main-heading gradient-text">
								Proctored tests
								</span>
							</div>

							<p className="desc">
							Auto proctoring is an AI-based automated proctoring technology that uses students' webcams, and microphone feeds for auto invigilation.
							</p>
						</div>

						<div className="landing-cta">
							<a href="/create">
								<button id='okay-button' >Create a Test</button>
							</a>

							
						</div>
					</div>
					<div className="heading-container-2">
						<img id="img1" src="/Landing1.gif" alt="temp" />
					</div>
				</div>
				

				<div className="features-content">
					<div className="curr-heading">
						<h2 className="feature-heading">Features</h2>
					</div>

					<div className="all-features">
						<div className="single-feature feature-1">
							<p className='feature-text'>Face Verification</p>
							<img className="feature-img" src="Scan.gif" alt="" />	
						</div>
						<div className="single-feature feature-2">
							<p className='feature-text'>Multiple People Detection</p>
							<img className="feature-img" src="Multiple.webp" alt="" />	
						</div>
						<div className="single-feature">
							<p className='feature-text'>Voice Detection</p>
							<img className="feature-img" src="Voice.gif" alt="" />	
						</div>
						<div className="single-feature">
							<p className='feature-text'>Devtools Check</p>
							<img className="feature-img" src="DevTools.gif" alt="" />
						</div>
						<div className="single-feature">
							<p className='feature-text'>Full Screen Check</p>
							<img className="feature-img" src="FullScreen.jpg" alt="" />
						</div>
						<div className="single-feature">
							<p className='feature-text'>Multiple Tabs Check</p>
							<img className="feature-img" src="Tab.png" alt="" />
						</div>
					</div>

					<div className="mid-cta">
						<a href="/create">
							<button id='okay-button'> Get Started</button>
						</a>
					</div>
				</div>

				<div className="final-features">
					<div className="top-sec">
						<div className="left-text">
							<h3 className="gradient-text">
							Uses Artificial Intelligence
							</h3>
							<h1 className="title-heading">
							 to Constructs the candidate facial expression mesh Model
							</h1>
						</div>
						<div className="infinite">
							<img src={infinite} alt="infinite" />
						</div>

						<div className="right-text">
							<h3 className="gradient-text">The best part?</h3>
							<h1 className="title-heading">
								Live Status on Admin Dashboard
							</h1>
						</div>
					</div>

					<div className="mid-cta final-cta">
						<p className="phew">
							And it’s <b>free</b>.
							<br />
							What are you waiting for?
						</p>
						<a href="/create">
							<button id='okay-button'>Join Test</button>
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Landing;
