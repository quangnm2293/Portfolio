import { MailIcon, MapIcon, PhoneIncomingIcon } from '@heroicons/react/outline';
import { useState } from 'react';

function Contact() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	return (
		<div className='my-10 p-5 max-w-screen-xl mx-auto flex flex-col space-y-5 divide-y-2' id='contact'>
			<h1 className='text-2xl text-red-400 font-semibold'>Get In Touch</h1>

			<div className='grid lg:grid-cols-2 gap-10 pt-4'>
				<form>
					<h1 className='uppercase text-xl text-gray-700'>Drop a line</h1>

					<div className='flex flex-col space-y-1'>
						<label htmlFor='' className='text-gray-700 mt-3'>
							Your Name
						</label>
						<input
							type='text'
							className='border border-gray-300 p-3 rounded-md'
							onChange={e => setName(e.target.value)}
						/>
					</div>

					<div className='flex flex-col space-y-1'>
						<label htmlFor='' className='text-gray-700 mt-3'>
							Email
						</label>
						<input
							type='email'
							className='border border-gray-300 p-3 rounded-md'
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<div className='flex flex-col space-y-1'>
						<label htmlFor='' className='text-gray-700 mt-3'>
							Subject
						</label>
						<input
							type='text'
							className='border border-gray-300 p-3 rounded-md'
							onChange={e => setSubject(e.target.value)}
						/>
					</div>
					<div className='flex flex-col space-y-1'>
						<label htmlFor='' className='text-gray-700 mt-3'>
							Message
						</label>
						<textarea
							rows='5'
							className='border border-gray-300 p-3 rounded-md'
							onChange={e => setMessage(e.target.value)}
						/>
					</div>

					<div className='mt-10'>
						<a
							href={`mailto:quangmn2293@gmail.com?subject=${subject}&body=${message}&cc=${name}&bcc=${email}`}
							className='p-4 px-10 rounded-md bg-gradient-to-b from-yellow-500 to-yellow-300 my-4 text-gray-600 
                                                 active:from-yellow-600 active:to-yellow-400 font-bold'
						>
							Send Message
						</a>
					</div>
				</form>

				<div>
					<h1 className='uppercase text-xl text-gray-700'>contact me</h1>

					<div className='flex items-center my-4 space-x-3 text-gray-700'>
						<MapIcon className='h-8' />
						<p className='tracking-wider font-semibold '>
							139/6/17 Duong Van Duong, Tan Quy, Tan Phu, Tp. Ho Chi Minh
						</p>
					</div>

					<div className='flex items-center my-4 space-x-3 text-gray-700'>
						<PhoneIncomingIcon className='h-8' />
						<p className='tracking-wider font-semibold'>0942 884 512</p>
					</div>

					<div className='flex items-center my-4 space-x-3 text-gray-700'>
						<MailIcon className='h-8' />
						<p className='tracking-wider font-semibold'>quangmn2293@gmail.com</p>
					</div>

					<a
						type='button'
						href='/NguyenMinhQuang_CV.pdf'
						download
						className='p-4 px-10 rounded-md bg-gradient-to-b from-blue-500 to-blue-300 my-4 
                                    active:from-blue-600 active:to-blue-400 font-bold text-white'
					>
						DOWNLOAD CV
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
