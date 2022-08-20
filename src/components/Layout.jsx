import { Footer } from './Footer'
import Navbar from './Navbar/Navbar'

export const Layout = ({children}) => {
  return (
    <div className='w-full h-full flex flex-col'>
			<Navbar />
			<div className='w-full h-full overflow-auto'>
				<div>{children}</div>
				<Footer />
			</div>
		</div>
  )
}
