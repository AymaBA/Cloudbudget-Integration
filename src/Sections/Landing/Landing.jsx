import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Landing.css'

export default function Landing() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
		const load = document.querySelector(".loader-container");
		window.addEventListener('load', () => {
			load.style.transform = "translateY(-100%)";
		})
	},[])
	
	
	return (
		<>
		<div className="loader-container">
				<div className="container">
					<div className="loader"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.605 8.05002C20.605 7.61502 20.75 7.18002 20.75 6.60002C20.75 3.41002 18.14 0.800018 14.95 0.800018C12.63 0.800018 10.745 2.10502 9.73001 3.99002C9.44001 3.84502 8.86001 3.70002 8.42501 3.70002C6.39501 3.70002 4.80001 5.29502 4.80001 7.32502C4.80001 7.61502 4.80001 7.90502 4.94501 8.05002C2.33501 8.48502 0.450012 10.515 0.450012 13.125C0.450012 15.88 2.77001 18.2 5.52501 18.2H20.025C22.78 18.2 25.1 15.88 25.1 13.125C25.1 10.515 23.215 8.34002 20.605 8.05002Z" fill="white" />
				</svg></div>
				</div>
			</div>
			<div className="body" id="landing">
				<div className="content">
					<h1 className="title" data-aos="fade-up">CloudBudget</h1>
					<p data-aos="fade-up" data-aos-delay="100" className="description">Cloud budget management for everyone.<br /> Only €69.95 a Month After a 7 Day Trial of<br />
Up to €4.99</p>
					<button data-aos="fade-up" data-aos-delay="200" className="signup">Sign Up</button>
				</div>
			</div>
		</>
	)
}
