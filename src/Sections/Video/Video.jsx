import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Video.css'

export default function Video() {
	useEffect(() => {
		Aos.init({ duration: 2000 })
	},[])
	return (
		<div className="video-body" id="video">
			<div className="text">
				<h1 data-aos="fade-down">Easy to Use Cloud Budget Management Software</h1>
				<p data-aos="fade-down" data-aos-delay="50">Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.</p>
				<a data-aos="fade-down" data-aos-delay="100">Learn More</a>
			</div>
			<div data-aos="fade-right" className="video">
				<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="33" cy="33" r="33" fill="#ED4C5C" />
					<path d="M39.75 33L28.5 40.875V25.125L39.75 33Z" fill="white" />
				</svg>
				<img src={"assets/Video_bg.jpg"}></img>
			</div>
		</div>
	)
}
