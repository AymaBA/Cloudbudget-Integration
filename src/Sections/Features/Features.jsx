import React, { useEffect } from 'react'
import './Features.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Features() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	},[])
	return (
		<div data-aos="fade-up" className="body-features" id="features">
			<h1 className="title-feature">Features</h1>
			<div data-aos="fade-up" data-aos-delay="100" className="card-group">
				<div data-aos-delay="70" className="card">
					<img src="assets/card/money.png"/>
					<div className="card-content">
						<h1>Supports All Currencies and  Cards</h1>
						<p>We support all popular currencies and is fully customizable to add</p>
						<a>Read More</a>
					</div>
				</div>
				<div className="card">
					<img src="assets/card/smartphone.png"/>
					<div className="card-content">
						<h1>Manage your expenses on the go</h1>
						<p>You can access your account from anywhere in the world on any device</p>
						<a>Read More</a>
					</div>
				</div>
				<div className="card">
					<img src="assets/card/batiment.png"/>
					<div className="card-content">
						<h1>Cloud Budget Management Software</h1>
						<p>Our software is made so you can access and manage your budget</p>
						<a>Read More</a>
					</div>
				</div>
			</div>
		</div>
	)
}
