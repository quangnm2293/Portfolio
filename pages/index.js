import Head from 'next/head'
import Header from './components/Header';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Slider from './components/Slider';
import About from './components/About';
import MenuModal from './components/MenuModal';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import SmallProject from './components/SmallProject';
import Contact from './components/Contact';

export default function Home() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='overflow-hidden bg-gradient-to-b from-blue-200 to-blue-50'>
			<Head>
				<title>Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=''>
				<Header />

				<Slider />

				<MenuModal />

				<About />

				<Skills />

				<Education />

				<Experience />

				<SmallProject />

				<Contact />
			</main>

			<div className='p-5 text-center bg-blue-200'>Copyright &copy;2021</div>
		</div>
	);
}
