import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Landing.css'

export default function Landing() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	},[])
	return (
		<div className="body" id="landing">
			<div className="content">
			<h1 className="title"  data-aos="fade-up">CloudBudget</h1>
			<p  data-aos="fade-up"  data-aos-delay="100" className="description">Cloud budget management for everyone.<br/> Only €69.95 a Month After a 7 Day Trial of<br/>
Up to €4.99</p>
			<button data-aos="fade-up" data-aos-delay="200" className="signup">Sign Up</button>
			</div>
		</div>
	)
}
