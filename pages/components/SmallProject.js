import Image from 'next/image';

function SmallProject() {
	return (
		<div className="flex flex-col space-y-5 bg-gradient-to-l from-green-300 to-green-200" id="project">
			<div className="flex flex-col space-y-5 p-10">
				<p
					data-aos="fade-right"
					className="uppercase text-2xl font-extrabold text-green-700 tracking-[4px]"
				>
					MY PROJECTS
				</p>
			</div>

			<div className="p-10">
				<div data-aos="slide-right" className="mb-10">
					<p className="uppercase text-xl tracking-widest text-green-600">MINT LALA STORE</p>
					<a href="https://github.com/quangnm2293/mintlala_20.git" target="_blank">
						<p className="tracking-wider pl-5 text-green-600">Github</p>
					</a>
					<a href="https://mintlala.herokuapp.com/" target="_blank">
						<p className="tracking-wider pl-5 text-green-600">Heroku</p>
					</a>

					<p className="uppercase text-xl tracking-widest text-green-600">Features:</p>
					<p className="text-gray-700 px-5 lg:tracking-widest">
						● Login/Register/Reset Password/Google Login/Change User Information(PW, Avatar,
						Name)
					</p>
					<p className="text-gray-700 px-5 lg:tracking-widest">● Search/Sort Products</p>
					<p className="text-gray-700 px-5 lg:tracking-widest">● CRUD Products</p>
					<p className="text-gray-700 px-5 lg:tracking-widest">● SocketIo</p>
					<p className="text-gray-700 px-5 lg:tracking-widest">● Cart</p>
					<p className="text-gray-700 px-5 lg:tracking-widest">● Checkout</p>
					<p className="text-gray-700 px-5 lg:tracking-widest">
						● Admin: Create/edit products, orders, users, messages, categories
					</p>
				</div>

				<div data-aos="slide-right" className="my-10">
					<p className="uppercase text-xl tracking-widest text-green-600">PORTFOLIO</p>
					<a href="https://github.com/quangnm2293/Portfolio.git" target="_blank">
						<p className="tracking-wider text-green-600 pl-5 hover:opacity-70">Github</p>
					</a>
					<a href="https://portfolio-ebon-two.vercel.app/" target="_blank">
						<p className="tracking-wider text-green-600 pl-5 hover:opacity-70">Vercel</p>
					</a>
				</div>
				<div data-aos="slide-right" className="my-10">
					<p className="uppercase text-xl tracking-widest text-green-600">Current projects</p>
					<a href="https://beta.kisvn.vn:8443/board" target="_blank">
						<p className="tracking-wider text-green-600 pl-5 hover:opacity-70">
							Maintain & develop new feature website trading
						</p>
					</a>
					<a href="https://trading.kisvn.vn/" target="_blank">
						<p className="tracking-wider text-green-600 pl-5 hover:opacity-70">
							Maintain trading website
						</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default SmallProject;
