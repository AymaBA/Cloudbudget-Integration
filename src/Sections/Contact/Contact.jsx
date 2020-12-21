import React, { useEffect } from 'react'
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Contact() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	},[])
	return (
		<div className="contact-body">
			<div className="contact-text" id="contact">
				<h1 data-aos="fade-down">Contact</h1>
				<p data-aos="fade-down" data-aos-delay="100">Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</p>
			</div>
			<form className="form-contact">
				<div className="input-group">
					<input data-aos="fade-down" data-aos-delay="150" type="text" placeholder="First Name" required/>
					<input data-aos="fade-down" data-aos-delay="200" type="text" placeholder="Last Name" required/>
				</div>
				<input data-aos="fade-down" data-aos-delay="250" type="tel" placeholder="Phone Number" required/>
				<select data-aos="fade-down" data-aos-delay="300" placeholder="Select Service">
					<option value="" disabled defaultValue>Select your Service</option>
					<option value="1">Service 1</option>
					<option value="2">Service 2</option>
				</select>
				<button data-aos="fade-down" data-aos-delay="350" className="submit">Submit Now</button>
			</form>
		</div>
	)
}
