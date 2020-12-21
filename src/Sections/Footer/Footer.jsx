import React, { useEffect } from 'react'
import './Footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	},[])
	return (
		<div className="footer-body">
			<div className="line1">
				<div  className="address">
					<h1 data-aos="fade-right">Address</h1>
					<p data-aos="fade-right" data-aos-delay="100" >Pipang Ltd, Griva Digeni,<br />
					81-83 Jacovides Tower, 1st Floor<br />
1090 Picosia USA</p>
				</div>
				<div  data-aos="fade-right" className="services">
					<h1 data-aos="fade-right" data-aos-delay="100">Services</h1>
					<p>Overview<br />
					Features<br />
					Technology<br />
					Terms & Conditions<br />
					Privecy
					</p>
				</div>
				<div className="getintouch">
					<h1 data-aos="fade-right" >Get in Touch</h1>
					<div data-aos="fade-right" data-aos-delay="100" className="footer-contact">
						<a href="mailto:info@cloudbudget.com">info@cloudbudget.com</a><br/>
						<a href="tel:+1 844-721-7120">+1 844-721-7120</a>
					</div>
					<div data-aos="fade-up" data-aos-delay="150" className="logo-group">
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.4167 1.75001C12.8581 2.14403 12.2396 2.4454 11.585 2.64251C11.2337 2.23855 10.7668 1.95224 10.2474 1.8223C9.7281 1.69235 9.18137 1.72504 8.68122 1.91594C8.18106 2.10684 7.75159 2.44674 7.45091 2.88967C7.15022 3.33261 6.99283 3.8572 7 4.39251V4.97584C5.97487 5.00242 4.95908 4.77506 4.04309 4.31402C3.1271 3.85297 2.33935 3.17254 1.75 2.33334C1.75 2.33334 -0.583331 7.58334 4.66667 9.91667C3.46531 10.7322 2.03418 11.141 0.583336 11.0833C5.83333 14 12.25 11.0833 12.25 4.37501C12.2495 4.21252 12.2338 4.05044 12.2033 3.89084C12.7987 3.30371 13.2188 2.56242 13.4167 1.75001Z" fill="#101010" />
						</svg>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.33334 4.66675C10.2616 4.66675 11.1518 5.0355 11.8082 5.69187C12.4646 6.34825 12.8333 7.23849 12.8333 8.16675V12.2501H10.5V8.16675C10.5 7.85733 10.3771 7.56058 10.1583 7.34179C9.9395 7.123 9.64276 7.00008 9.33334 7.00008C9.02392 7.00008 8.72717 7.123 8.50838 7.34179C8.28959 7.56058 8.16667 7.85733 8.16667 8.16675V12.2501H5.83334V8.16675C5.83334 7.23849 6.20208 6.34825 6.85846 5.69187C7.51484 5.0355 8.40508 4.66675 9.33334 4.66675Z" fill="#101010" />
							<path d="M1.16667 5.25H3.5V12.25H1.16667V5.25Z" fill="#101010" />
							<path d="M2.33333 3.50008C2.97767 3.50008 3.5 2.97775 3.5 2.33341C3.5 1.68908 2.97767 1.16675 2.33333 1.16675C1.689 1.16675 1.16667 1.68908 1.16667 2.33341C1.16667 2.97775 1.689 3.50008 2.33333 3.50008Z" fill="#101010" />
						</svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5 1.16675H8.75C7.97645 1.16675 7.23458 1.47404 6.6876 2.02102C6.14062 2.568 5.83333 3.30987 5.83333 4.08342V5.83342H4.08333V8.16675H5.83333V12.8334H8.16666V8.16675H9.91666L10.5 5.83342H8.16666V4.08342C8.16666 3.92871 8.22812 3.78033 8.33752 3.67094C8.44692 3.56154 8.59529 3.50008 8.75 3.50008H10.5V1.16675Z" fill="#101010" />
						</svg>
					</div>
				</div>
				<div className="services">
					<h1 data-aos="fade-right" >We Support</h1>
					<img data-aos="fade-right" data-aos-delay="100" src="assets/secure-p-1 1.png" />
				</div>
			</div>
			<div className="line2">
				<p>Copyright 2018 CloudBudget</p>
				<a href="https://ayma.tk" target="blank">Coded by Ayman</a>
			</div>
		</div>
	)
}
