import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';

function Header() {
	const categories = ['Home', 'About', 'Skills', 'Education', 'EXPERIENCE', 'Small Project', 'contact'];
	const [position, setPosition] = useState(false);

	window.onscroll = () => {
		if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
			setPosition(true);
		} else {
			setPosition(false);
		}
	};

	const handleScroll = (category, e) => {
		e.target.classList.add('text-red-400');
		const contactEl = document.getElementById('contact');
		const sliderEl = document.getElementById('slider');
		const aboutEl = document.getElementById('about');
		const skillsEl = document.getElementById('skills');
		const educationEl = document.getElementById('education');
		const experienceEl = document.getElementById('experience');
		const projectEl = document.getElementById('project');
		category === 'Home'
			? sliderEl.scrollIntoView({ behavior: 'smooth' })
			: category === 'About'
			? aboutEl.scrollIntoView({ behavior: 'smooth' })
			: category === 'Skills'
			? skillsEl.scrollIntoView({ behavior: 'smooth' })
			: category === 'Education'
			? educationEl.scrollIntoView({ behavior: 'smooth' })
			: category === 'EXPERIENCE'
			? experienceEl.scrollIntoView({ behavior: 'smooth' })
			: category === 'Small Project'
			? projectEl.scrollIntoView({ behavior: 'smooth' })
			: contactEl.scrollIntoView({ behavior: 'smooth' });
	};
	const handleTop = () => {
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	};

	const handleOpen = () => {
		const menuModalBodyEl = document.getElementById('menuModalBody');
		const menuModalEl = document.getElementById('menuModal');

		menuModalEl.classList.remove('hidden');
		menuModalBodyEl.classList.remove('animate-slide-right-out');
		menuModalBodyEl.classList.add('animate-slide-right-in');
	};

	return (
		<div
			className={`${
				position ? 'fixed top-0 left-0 right-0 animate-slide-top' : ''
			} flex justify-between p-3 lg:p-2 items-center bg-gradient-to-b from-gray-700 to-gray-500
				z-10`}
			id='header'
		>
			<div onClick={handleTop} className='cursor-pointer'>
				<h1 className='text-xl lg:text-2xl font-bold text-green-300'>MiQ Portfolio</h1>
				<p className='text-center hidden lg:block text-green-300'>Web Developer</p>
			</div>

			<div className='hidden  uppercase lg:flex text-green-500 font-bold'>
				{categories.map((category, i) => (
					<div
						key={i}
						className='relative group px-2 active:text-red-400'
						onClick={e => handleScroll(category, e)}
					>
						<p className='cursor-pointer'>{category}</p>
						<span
							className='w-full h-[2px] absolute bottom-[-2px] bg-yellow-500 left-0 right-0 
							group-hover:animate-fadeIn hidden group-hover:block mx-auto'
						></span>
					</div>
				))}
			</div>

			<div className='lg:hidden cursor-pointer'>
				<MenuIcon className='h-8 text-white' onClick={handleOpen} />
			</div>
		</div>
	);
}

export default Header;
