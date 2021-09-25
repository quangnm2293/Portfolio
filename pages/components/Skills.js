import {
	AcademicCapIcon,
	CodeIcon,
	DatabaseIcon,
	DeviceMobileIcon,
	ExclamationIcon,
	PencilAltIcon,
	ScaleIcon,
	SupportIcon,
	SwitchHorizontalIcon,
} from '@heroicons/react/outline';

function Skills() {
	return (
		<div className='max-w-screen-2xl mx-auto p-10 flex flex-col space-y-5' id='skills'>
			<p data-aos='fade-right' className='uppercase text-sm text-green-700 tracking-[4px]'>
				WHAT I DO?
			</p>
			<p data-aos='flip-right' className='uppercase text-xl tracking-widest text-green-500 pb-20'>
				HERE ARE SOME OF MY EXPERTISE
			</p>

			<div className='grid lg:grid-cols-2 gap-5 tracking-wider lg:tracking-widest'>
				<div data-aos='slide-right' className='flex flex-col space-y-10'>
					<div className='flex space-x-5 items-center'>
						<CodeIcon className='h-10 text-green-600' />
						<div className='flex flex-col space-y-2'>
							<h1>HyperText Markup Language (HTML)</h1>
							<div className='min-w-[60vw] md:min-w-[80vw] lg:min-w-[30vw] h-2 bg-gray-400'>
								<div className='w-[70%] h-2 bg-green-500'></div>
							</div>
						</div>
					</div>
					<div className='flex space-x-5 items-center'>
						<PencilAltIcon className='h-10 text-red-600' />
						<div className='flex flex-col space-y-2'>
							<h1>Cascading Style Sheets (CSS)</h1>
							<div className='min-w-[60vw] md:min-w-[80vw] lg:min-w-[30vw] h-2 bg-gray-400'>
								<div className='w-[80%] h-2 bg-red-500'></div>
							</div>
						</div>
					</div>
					<div className='flex space-x-5 items-center'>
						<ScaleIcon className='h-10 text-yellow-600' />
						<div className='flex flex-col space-y-2'>
							<h1>Tailwindcss & Bootstrap</h1>
							<div className='min-w-[60vw] md:min-w-[80vw] lg:min-w-[30vw] h-2 bg-gray-400'>
								<div className='w-[55%] h-2 bg-yellow-500'></div>
							</div>
						</div>
					</div>
					<div className='flex space-x-5 items-center'>
						<DatabaseIcon className='h-10 text-blue-600' />
						<div className='flex flex-col space-y-2'>
							<h1>Vanilla Javascript (JS)</h1>
							<div className='min-w-[60vw] md:min-w-[80vw] lg:min-w-[30vw] h-2 bg-gray-400'>
								<div className='w-[65%] h-2 bg-blue-700'></div>
							</div>
						</div>
					</div>
				</div>
				<div data-aos='slide-right' className='flex flex-col space-y-10'>
					<div className='flex space-x-5 items-center'>
						<DeviceMobileIcon className='h-10 text-red-700' />
						<div className='flex flex-col space-y-2'>
							<h1>Responsive Design & Mobile-First Websites</h1>
							<div className='min-w-[60vw] md:min-w-[80vw] lg:min-w-[30vw] h-2 bg-gray-400'>
								<div className='w-[85%] h-2 bg-red-300'></div>
							</div>
						</div>
					</div>
					<div className='flex space-x-5 items-center'>
						<SupportIcon className='h-10 text-blue-500' />
						<div className='flex flex-col space-y-2'>
							<h1>ReactJS & NextJS</h1>
							<div className='min-w-[60vw] md:min-w-[80vw] lg:min-w-[30vw] h-2 bg-gray-400'>
								<div className='w-[55%] h-2 bg-blue-500'></div>
							</div>
						</div>
					</div>
					<div className='flex space-x-5 items-center'>
						<SwitchHorizontalIcon className='h-10 text-green-700' />
						<div className='flex flex-col space-y-2'>
							<h1>NodeJS</h1>
							<div className='min-w-[60vw] md:min-w-[80vw] lg:min-w-[30vw] h-2 bg-gray-400'>
								<div className='w-[40%] h-2 bg-green-700'></div>
							</div>
						</div>
					</div>
					<div className='flex space-x-5 items-center'>
						<AcademicCapIcon className='h-10 text-yellow-800' />
						<div className='flex flex-col space-y-2'>
							<h1>Photoshop/After Effect/Adobe Premiere</h1>
							<div className='min-w-[60vw] md:min-w-[80vw] lg:min-w-[30vw] h-2 bg-gray-400'>
								<div className='w-[70%] h-2 bg-yellow-800'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
