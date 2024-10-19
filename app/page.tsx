export default function Home() {
	return (
		<div className='flex flex-col min-h-[100dvh]'>
			<div className='flex-1 flex flex-col justify-center items-center text-center px-4'>
				<div className='space-y-6'>
					<h1 className='text-5xl font-bold text-white'>
						Coming Soon! 🚀
					</h1>
					<p className='text-gray-400'>
						We&asos;re working hard to launch Logmateflow. Stay
						tuned for updates!
					</p>
				</div>
			</div>
			<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
				<p className='text-xs text-gray-500 dark:text-gray-400'>
					© 2024 LogmateFlow. All rights reserved.
				</p>
			</footer>
		</div>
	);
}
