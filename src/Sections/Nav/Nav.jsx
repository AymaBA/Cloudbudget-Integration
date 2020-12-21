import React,{useEffect, useState} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Nav.css';

export default function Nav() {
	const [color, setColor] = useState(false);
	window.addEventListener("scroll", () => {
		if (window.scrollY >= document.getElementById("landing").clientHeight) {
			setColor(true);
		} else {
			setColor(false);
		}
	})
	
	let style ={
		background: color ? "linear-gradient(90deg, rgba(213, 32, 71, 0.5) 0%, rgba(238, 61, 27, 0.8) 100%)" : "rgba(213, 32, 71, 0)",
		transition: '.3s all'
	}

	return (
		<div className="nav" style={style}>
			<div className="nav-title">
				<h1><ScrollLink to="landing" smooth={true}>
				CloudBudget
				</ScrollLink></h1>
				<svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.605 8.05002C20.605 7.61502 20.75 7.18002 20.75 6.60002C20.75 3.41002 18.14 0.800018 14.95 0.800018C12.63 0.800018 10.745 2.10502 9.73001 3.99002C9.44001 3.84502 8.86001 3.70002 8.42501 3.70002C6.39501 3.70002 4.80001 5.29502 4.80001 7.32502C4.80001 7.61502 4.80001 7.90502 4.94501 8.05002C2.33501 8.48502 0.450012 10.515 0.450012 13.125C0.450012 15.88 2.77001 18.2 5.52501 18.2H20.025C22.78 18.2 25.1 15.88 25.1 13.125C25.1 10.515 23.215 8.34002 20.605 8.05002Z" fill="white" />
				</svg>
			</div>
			<div className="nav-link-group">
				<ScrollLink offset={-117} to="video" smooth={true}>
					<span className="nav-link">OVERVIEW</span>
				</ScrollLink>
				<ScrollLink offset={-117} to="features" smooth={true}>
					<span className="nav-link">FEATURES</span>
				</ScrollLink>
				<ScrollLink offset={-117} to="technology" smooth={true}>
					<span className="nav-link">TECHNOLOGY</span>
				</ScrollLink>
				<ScrollLink offset={-117} to="contact" smooth={true}>
					<span className="nav-link">CONTACT</span>
				</ScrollLink>
				<ScrollLink to="landing" smooth={true}>
					<span className="nav-link">Sign up</span>
				</ScrollLink>
			</div>
			<div className="nav-right">
				<div className="nav-language">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24 3.3C21.65 1.85 18.95 1 16 1V3.3H24Z" fill="#ED4C5C" />
						<path d="M16 5.59999H26.8C25.95 4.74999 25 3.94999 24 3.29999H16V5.59999Z" fill="white" />
						<path d="M16 7.90001H28.65C28.1 7.05001 27.5 6.30001 26.85 5.60001H16V7.90001Z" fill="#ED4C5C" />
						<path d="M16 10.2H29.85C29.5 9.39999 29.1 8.59999 28.65 7.89999H16V10.2Z" fill="white" />
						<path d="M16 12.5H30.6C30.4 11.7 30.15 10.95 29.85 10.2H16V12.5Z" fill="#ED4C5C" />
						<path d="M16 14.85H30.95C30.9 14.05 30.75 13.3 30.6 12.55H16V14.85Z" fill="white" />
						<path d="M30.95 14.85H16V16H1C1 16.4 1 16.75 1.05 17.15H30.95C31 16.75 31 16.4 31 16C31 15.6 31 15.2 30.95 14.85Z" fill="#ED4C5C" />
						<path d="M1.39999 19.45H30.6C30.8 18.7 30.9 17.95 30.95 17.15H1.04999C1.09999 17.9 1.19999 18.7 1.39999 19.45Z" fill="white" />
						<path d="M2.14999 21.75H29.85C30.15 21 30.4 20.25 30.6 19.45H1.39999C1.59999 20.25 1.84999 21 2.14999 21.75Z" fill="#ED4C5C" />
						<path d="M3.34999 24.05H28.65C29.1 23.3 29.5 22.55 29.85 21.75H2.14999C2.49999 22.55 2.89999 23.3 3.34999 24.05Z" fill="white" />
						<path d="M5.15001 26.35H26.85C27.5 25.65 28.15 24.85 28.65 24.05H3.35001C3.85001 24.9 4.50001 25.65 5.15001 26.35Z" fill="#ED4C5C" />
						<path d="M7.94999 28.65H24.05C25.1 28 26 27.2 26.85 26.35H5.14999C5.99999 27.25 6.94999 28 7.94999 28.65Z" fill="white" />
						<path d="M16 31C18.95 31 21.7 30.15 24.05 28.65H7.95001C10.3 30.15 13.05 31 16 31Z" fill="#ED4C5C" />
						<path d="M8 3.3C6.95 3.95 6 4.75 5.15 5.6C4.45 6.3 3.85 7.1 3.35 7.9C2.9 8.65 2.45 9.4 2.15 10.2C1.85 10.95 1.6 11.7 1.4 12.5C1.2 13.25 1.1 14 1.05 14.8C1 15.2 1 15.6 1 16H16V1C13.05 1 10.35 1.85 8 3.3Z" fill="#428BC1" />
						<path d="M12.5 1.5L12.75 2.25H13.5L12.9 2.75L13.1 3.5L12.5 3.05L11.9 3.5L12.1 2.75L11.5 2.25H12.25L12.5 1.5Z" fill="white" />
						<path d="M14.5 4.5L14.75 5.25H15.5L14.9 5.75L15.1 6.5L14.5 6.05L13.9 6.5L14.1 5.75L13.5 5.25H14.25L14.5 4.5Z" fill="white" />
						<path d="M10.5 4.5L10.75 5.25H11.5L10.9 5.75L11.1 6.5L10.5 6.05L9.9 6.5L10.1 5.75L9.5 5.25H10.25L10.5 4.5Z" fill="white" />
						<path d="M12.5 7.5L12.75 8.25H13.5L12.9 8.75L13.1 9.5L12.5 9.05L11.9 9.5L12.1 8.75L11.5 8.25H12.25L12.5 7.5Z" fill="white" />
						<path d="M8.5 7.5L8.75 8.25H9.5L8.9 8.75L9.1 9.5L8.5 9.05L7.9 9.5L8.1 8.75L7.5 8.25H8.25L8.5 7.5Z" fill="white" />
						<path d="M4.5 7.5L4.75 8.25H5.5L4.9 8.75L5.1 9.5L4.5 9.05L3.9 9.5L4.1 8.75L3.5 8.25H4.25L4.5 7.5Z" fill="white" />
						<path d="M14.5 10.5L14.75 11.25H15.5L14.9 11.75L15.1 12.5L14.5 12.05L13.9 12.5L14.1 11.75L13.5 11.25H14.25L14.5 10.5Z" fill="white" />
						<path d="M10.5 10.5L10.75 11.25H11.5L10.9 11.75L11.1 12.5L10.5 12.05L9.9 12.5L10.1 11.75L9.5 11.25H10.25L10.5 10.5Z" fill="white" />
						<path d="M6.5 10.5L6.75 11.25H7.5L6.9 11.75L7.1 12.5L6.5 12.05L5.9 12.5L6.1 11.75L5.5 11.25H6.25L6.5 10.5Z" fill="white" />
						<path d="M12.5 13.5L12.75 14.25H13.5L12.9 14.75L13.1 15.5L12.5 15.05L11.9 15.5L12.1 14.75L11.5 14.25H12.25L12.5 13.5Z" fill="white" />
						<path d="M8.5 13.5L8.75 14.25H9.5L8.9 14.75L9.1 15.5L8.5 15.05L7.9 15.5L8.1 14.75L7.5 14.25H8.25L8.5 13.5Z" fill="white" />
						<path d="M4.5 13.5L4.75 14.25H5.5L4.9 14.75L5.1 15.5L4.5 15.05L3.9 15.5L4.1 14.75L3.5 14.25H4.25L4.5 13.5Z" fill="white" />
						<path d="M5.90002 6.5L6.50002 6.05L7.10002 6.5L6.85002 5.75L7.45002 5.25H6.70002L6.50002 4.5L6.25002 5.25H5.55002L6.15002 5.7L5.90002 6.5Z" fill="white" />
						<path d="M1.90001 12.5L2.50001 12.05L3.10001 12.5L2.85001 11.75L3.45001 11.25H2.75001L2.50001 10.5L2.25001 11.25H1.75001C1.75001 11.3 1.70001 11.35 1.70001 11.4L2.10001 11.7L1.90001 12.5Z" fill="white" />
					</svg>
					<span className="language" >EN</span>
					<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.7727 0.273438H1.22735C0.881062 0.273438 0.687703 0.639062 0.902156 0.888672L6.67481 7.58242C6.84005 7.77402 7.15821 7.77402 7.3252 7.58242L13.0979 0.888672C13.3123 0.639062 13.119 0.273438 12.7727 0.273438Z" fill="white" />
					</svg>
				</div>
			<button className="login">LOGIN</button>
			</div>
		</div>
	)
}