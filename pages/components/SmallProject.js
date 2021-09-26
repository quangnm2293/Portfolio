import Image from 'next/image';

function SmallProject() {
	return (
		<div className='flex flex-col space-y-5 bg-green-300' id='project'>
			<div className='flex flex-col space-y-5 p-10'>
				<p data-aos='fade-right' className='uppercase text-sm text-green-700 tracking-[4px]'>
					MY PROJECT
				</p>
				<p data-aos='flip-right' className='uppercase text-xl tracking-widest text-green-600'>
					THIS IS MY SMALL PROJECT
				</p>
			</div>

			<div
				data-aos='slide-left'
				className='flex flex-col items-center space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row'
			>
				<Image src='/work.png' alt='Work Hard' height='500px' width='900px' />

				<div className='p-5 lg:max-w-[50%]'>
					<p className='text-xl lg:text-4xl text-gray-700'>
						"I quitted my job since Feb 2021 after almost 4 years work like a TESTER. I feel
						happy with my job but in the deep down, something is missing. I spend a lot of time
						to think about it. And finally found my desire is coding not is testing. So, I
						decided to take risk, start from the zero and want to be a hero. I spend 6 six
						months to studying, with 12-16h/day. Started with HTML/CSS basic, Javascript,
						ReactJS, NextJS, CSS library link Bootstrap, Tailwincss. And finally complete a
						small project after that"
					</p>
				</div>
			</div>

			<div className='p-10'>
				<div data-aos='slide-right' className='mb-10'>
					<p className='uppercase text-xl tracking-widest text-green-600'>MINT LALA STORE</p>
					<a href='https://github.com/quangnm2293/mintlala_20.git' target='_blank'>
						<p className='tracking-wider pl-5 text-green-600'>Github</p>
					</a>
					<a href='https://mintlala.herokuapp.com/' target='_blank'>
						<p className='tracking-wider pl-5 text-green-600'>Heroku</p>
					</a>

					<p className='uppercase text-xl tracking-widest text-green-600'>Features:</p>
					<p className='text-gray-700 px-5 lg:tracking-widest'>
						● Login/Register/Reset Password/Google Login/Change User Information(PW, Avatar,
						Name)
					</p>
					<p className='text-gray-700 px-5 lg:tracking-widest'>● Search/Sort Products</p>
					<p className='text-gray-700 px-5 lg:tracking-widest'>● CRUD Products</p>
					<p className='text-gray-700 px-5 lg:tracking-widest'>● SocketIo</p>
					<p className='text-gray-700 px-5 lg:tracking-widest'>● Cart</p>
					<p className='text-gray-700 px-5 lg:tracking-widest'>● Checkout</p>
					<p className='text-gray-700 px-5 lg:tracking-widest'>
						● Admin: Create/edit products, orders, users, messages, categories
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
					<div data-aos='slide-left' className='overflow-hidden'>
						<p className='text-xl p-2 text-gray-700'>Login/Register</p>
						<a href='https://mintlala.herokuapp.com/signin' target='_blank'>
							<Image
								src='/login.png'
								alt='login'
								height='500px'
								width='500px'
								className='rounded-md transition-transform duration-1000 hover:scale-110'
							/>
						</a>
					</div>

					<div data-aos='slide-left' className='overflow-hidden'>
						<p className='text-xl p-2 text-gray-700'>Use MongoDB and Mongoose</p>
						<a href='https://mintlala.herokuapp.com' target='_blank'>
							<Image
								src='/mongodb.png'
								alt='mongodb'
								height='500px'
								width='500px'
								className='rounded-md transition-transform duration-1000 hover:scale-110'
							/>
						</a>
					</div>

					<div data-aos='slide-left' className='overflow-hidden'>
						<p className='text-xl p-2 text-gray-700'>Verify Gmail</p>
						<a href='https://mintlala.herokuapp.com' target='_blank'>
							<Image
								src='/gmail.png'
								alt='gmail'
								height='500px'
								width='500px'
								className='rounded-md transition-transform duration-1000 hover:scale-110'
							/>
						</a>
					</div>
					<div data-aos='slide-left' className='overflow-hidden'>
						<p className='text-xl p-2 text-gray-700'>Reset Password</p>
						<a href='https://mintlala.herokuapp.com/users/forgot-password' target='_blank'>
							<Image
								src='/reset.png'
								alt='reset'
								height='500px'
								width='500px'
								className='rounded-md transition-transform duration-1000 hover:scale-110'
							/>
						</a>
					</div>

					<div data-aos='slide-left' className='overflow-hidden'>
						<p className='text-xl p-2 text-gray-700'>Use SSR at /categories/</p>
						<a href='https://mintlala.herokuapp.com/categories/all' target='_blank'>
							<Image
								src='/categories.png'
								alt='categories'
								height='500px'
								width='500px'
								className='rounded-md transition-transform duration-1000 hover:scale-110'
							/>
						</a>
					</div>
					<div data-aos='slide-left' className='overflow-hidden'>
						<p className='text-xl p-2 text-gray-700'>Cart Page</p>
						<a href='https://mintlala.herokuapp.com/cart' target='_blank'>
							<Image
								src='/checkout.png'
								alt='checkout'
								height='500px'
								width='500px'
								className='rounded-md transition-transform duration-1000 hover:scale-110'
							/>
						</a>
					</div>
					<div data-aos='slide-left' className='overflow-hidden'>
						<p className='text-xl p-2 text-gray-700'>Checkout Page</p>
						<a href='https://mintlala.herokuapp.com/checkout' target='_blank'>
							<Image
								src='/checkout1.png'
								alt='checkout'
								height='500px'
								width='500px'
								className='rounded-md transition-transform duration-1000 hover:scale-110'
							/>
						</a>
					</div>
					<div data-aos='slide-left' className='overflow-hidden'>
						<p className='text-xl p-2 text-gray-700'>Socket IO</p>
						<a href='https://mintlala.herokuapp.com/checkout' target='_blank'>
							<Image
								src='/socket.png'
								alt='socket'
								height='500px'
								width='500px'
								className='rounded-md transition-transform duration-1000 hover:scale-110'
							/>
						</a>
					</div>
				</div>

				<div data-aos='slide-right' className='my-10'>
					<p className='uppercase text-xl tracking-widest text-green-600'>PORTFOLIO</p>
					<a href='https://github.com/quangnm2293/Portfolio.git' target='_blank'>
						<p className='tracking-wider text-green-600 pl-5'>Github</p>
					</a>
					<a href='https://portfolio-ebon-two.vercel.app/' target='_blank'>
						<p className='tracking-wider text-green-600 pl-5'>Vercel</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default SmallProject;
