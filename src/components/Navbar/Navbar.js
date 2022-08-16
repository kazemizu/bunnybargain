import Logo from '../Logo/Logo';
import './../../App.css'
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-background w-full h-14 flex justify-center text-white">
            <div className="w-4/5 h-full flex">
                <div className="w-1/5 h-full flex">
                    <Logo />
                </div>
                <div className="w-3/5 h-full flex">
                    <ul className="w-full flex justify-evenly font-medium">
                        <li className="self-center cursor-pointer">Home</li>
                        <li className="self-center cursor-pointer">Market</li>
                        <li className="self-center cursor-pointer">About Us</li>
                        <li className="self-center cursor-pointer">Mile Stone</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;