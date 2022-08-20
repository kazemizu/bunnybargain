import { FaDiscord } from 'react-icons/fa'

import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { Member } from '../components/Member';

function Homepage() {
	return (
		<div className='w-full h-screen flex justify-center'>
			<Layout>
				<Hero />
				<Member />
				<div className='bg-secondary_color_blue w-full h-[50vh] flex justify-center items-center text-white'>
					<div className='w-full max-w-[50%] flex'>
						<div className='border-r-[5px] px-6 py-8 border-primary_color_purple/60 text-4xl'>
							<h1>Wanna be Bunnian?</h1>
						</div>
						<div className='flex flex-col justify-center pl-12'>
							<div className='flex space-x-4 items-center text-4xl'>
								<FaDiscord />
								<h1>Discord</h1>
							</div>
							<div>
								<img src="" alt="" />
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Homepage;
