import React from 'react'
import './Features.css'

export default function Features() {
	return (
		<div className="body-features" id="features">
			<h1 className="title-feature">Features</h1>
			<div className="card-group">
				<div className="card">
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
