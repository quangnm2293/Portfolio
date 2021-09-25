import { XIcon } from '@heroicons/react/outline';

function MenuModal() {
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

	return (
		<div className='hidden fixed top-0 right-0 left-0 bottom-0 bg-[#000000a6] z-20' id='menuModal'>
			<div id='menuModalBody' className='fixed top-0 right-0 bottom-0 w-2/3 bg-gray-100'>
				<div className='text-xl bg-gray-500 p-3 font-bold text-white flex justify-between items-center'>
					<p>MiQ Portfolio</p>
					<XIcon className='h-6' onClick={handleClose} />
				</div>

				<div className='flex flex-col space-y-5 p-5'>
					<p>Home</p>
					<p>About</p>
					<p>Skills</p>
					<p>Education</p>
					<p>Small Project</p>
					<p>Contact</p>
				</div>
			</div>
		</div>
	);
}

export default MenuModal;
