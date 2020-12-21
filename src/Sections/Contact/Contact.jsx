import React from 'react'
import './Contact.css'

export default function Contact() {
	return (
		<div className="contact-body">
			<div className="contact-text" id="contact">
				<h1>Contact</h1>
				<p>Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</p>
			</div>
			<form className="form-contact">
				<div className="input-group">
					<input type="text" placeholder="First Name" required/>
					<input type="text" placeholder="Last Name" required/>
				</div>
				<input type="tel" placeholder="Phone Number" required/>
				<select placeholder="Select Service">
					<option value="" disabled selected>Select your Service</option>
					<option value="1">Service 1</option>
					<option value="2">Service 2</option>
				</select>
				<button className="submit">Submit Now</button>
			</form>
		</div>
	)
}
