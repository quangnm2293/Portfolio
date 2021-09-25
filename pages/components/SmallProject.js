import Image from 'next/image';

function SmallProject() {
	return (
		<div className='flex flex-col space-y-5 bg-green-300'>
			<div className='flex flex-col space-y-5 p-10'>
				<p data-aos='fade-right' className='uppercase text-sm text-green-700 tracking-[4px]'>
					MY PROJECT
				</p>
				<p data-aos='flip-right' className='uppercase text-xl tracking-widest text-green-600'>
					THIS IS MY SMALL PROJECT
				</p>
			</div>

			<div className='flex flex-col items-center space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row'>
				<Image src='/work.png' alt='Work Hard' height='500px' width='900px' />

				<div className='p-5 lg:max-w-[50%]'>
					<p className='text-xl lg:text-4xl text-gray-700'>
						"I quitted my job since Feb 2021 after almost 4 years work like a TESTER. I feel
						happy with my job but in the deep down, something is missing. I spend a lot of time
						to think about it. And finally found my desire is coding not is testing. So, I
						decided to take risk, start from the zero and want to be a hero. I spend 6 six
						months to studying, with 12-16h/day. Started with HTML/CSS basic, Javascript,
						ReactJS, NextJS, CSS library link Bootstrap, Tailwincss. Below is a small project i
						have done after study."
					</p>
				</div>
			</div>

			<div className='p-10'>
				<p className='uppercase text-xl tracking-widest text-green-600'>MINT LALA STORE</p>

				<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'></div>
			</div>
		</div>
	);
}

export default SmallProject;
