import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='w-full h-[30vh] flex justify-center items-center bg-primary_color_purple text-white'>
      <div className='w-full max-w-[70vw]'>
        <ul className='text-xl'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/market'><li>Market</li></Link>
          <Link to='/about-us'><li>About Us</li></Link>
          <Link to='/milestone'><li>Mile Stone</li></Link>
        </ul>
        <div className='flex justify-end text-xl'>
          <h1>Copyright &copy; BunnyBargain</h1>
        </div>
      </div>
    </div>
  )
}