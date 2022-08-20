import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div className='navbar-background w-full h-14 flex justify-center text-white'>
			<div className='w-full max-w-[85vw] h-full flex justify-between'>
				<div className='flex flex-grow items-center'>
					<h3>Bunny<br />Bargain</h3>
				</div>
				<div className='flex items-center w-3/6'>
					<ul className='w-full flex items-center justify-evenly space-x-4 font-medium'>
						<Link to='/'>
							<li className='cursor-pointer'>Home</li>
						</Link>
						<Link to='/market'>
							<li className='cursor-pointer'>Market</li>
						</Link>
						<Link to='/about-us'>
							<li className='cursor-pointer'>About Us</li>
						</Link>
						<Link to='/milestone'>
							<li className='cursor-pointer'>Mile Stone</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;