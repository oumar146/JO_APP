import '../styles/header.css'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {

    return (
        <header className="bg-header">
            <NavLink to='/home' className='logo'>
                <img src={logo} alt='logo JO' className='logo' />
                <p>Paris 2024 data</p>
            </NavLink>
            <ul className='nav-links'>
                <li>Inscription</li>
                <li>Connexion</li>
            </ul>
        </header>
    )
}

export default Header;