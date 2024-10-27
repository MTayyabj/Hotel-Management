import './Navbar.css'
import Logo from '../../../assets/Images/Logo.png'

export default function Navbar () {

    return(
        <>
        <div className="Navbar">
            <div>
                <img src={Logo} alt="" className='Nav-logo' />
            </div>
            <div>
            <ul  className="Nav-items">
                <li className='Nav-items-a'>About</li>
                <li className='Nav-items-a'>Services</li>
                <li className='Nav-items-a'>Features</li>
                <li className='Nav-items-a'>Contact</li>
            </ul>
            </div>

        </div>
        </>
    )
}