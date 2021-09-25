import { XIcon } from '@heroicons/react/outline';

function MenuModal() {

	const categories = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Small Project', 'contact'];

	const handleClose = () => {
		const menuModalEl = document.getElementById('menuModal');
		const menuModalBodyEl = document.getElementById('menuModalBody');

		menuModalBodyEl.classList.remove('animate-slide-right-in');
		menuModalBodyEl.classList.add('animate-slide-right-out');

		setTimeout(() => {
			menuModalEl.classList.add('hidden');
		}, 400);
	};

	window.onclick = e => {
		const menuModalEl = document.getElementById('menuModal');
		const menuModalBodyEl = document.getElementById('menuModalBody');
		if (e.target === menuModalEl) {
			menuModalBodyEl.classList.remove('animate-slide-right-in');
			menuModalBodyEl.classList.add('animate-slide-right-out');

			setTimeout(() => {
				menuModalEl.classList.add('hidden');
			}, 400);
		}
	};

	const handleScroll = category => {
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
			: category === 'Experience'
			? experienceEl.scrollIntoView({ behavior: 'smooth' })
			: category === 'Small Project'
			? projectEl.scrollIntoView({ behavior: 'smooth' })
			: contactEl.scrollIntoView({ behavior: 'smooth' });

		handleClose();
	};

	return (
		<div className='hidden fixed top-0 right-0 left-0 bottom-0 bg-[#000000a6] z-20' id='menuModal'>
			<div id='menuModalBody' className='fixed top-0 right-0 bottom-0 w-2/3 bg-gray-100'>
				<div className='text-xl bg-gray-500 p-3 font-bold text-white flex justify-between items-center'>
					<p>MiQ Portfolio</p>
					<XIcon className='h-6' onClick={handleClose} />
				</div>

				<div className='flex flex-col space-y-5 p-5'>
					{categories.map((category, i) => (
						<p
							className='capitalize text-semibold tracking-wider text-xl text-gray-600'
							key={i}
							onClick={() => handleScroll(category)}
						>
							{category}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}

export default MenuModal;
