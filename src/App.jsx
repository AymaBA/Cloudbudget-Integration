import React from 'react';
import Landing from './Sections/Landing/Landing';
import Nav from './Sections/Nav/Nav';
import Video from './Sections/Video/Video';
import Features from './Sections/Features/Features';
import Technology from './Sections/Technology/Technology';
import Download from './Sections/App/Download';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';



function App() {
	return (
		<>
			<Nav />
			<Landing />
			<Video />
			<Features />
			<Technology />
			<Download />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
