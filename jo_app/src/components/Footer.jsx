import '../styles/footer.css';
import logos from '../assets/logos.svg';

const Footer = () => {
    return (
        <footer>
            <div className='main-content'>      
                <div className='logos'>
                    <img src={logos} alt='logo JO' className='logo' />
                    <p>Paris 2024 data</p>
                </div>
                <ul className='nav-links'>
                    <li>Contact</li>
                    <li>Connexion</li>
                </ul>
            </div>
            <ul>
                <li className='right-dash'>Mentions légales</li>
                <li className='right-dash'>Politique de confidentialité</li>
                <li className='right-dash'>Paris2024.org</li>
                <li>Gestion des cookies</li>
            </ul>
        </footer>
    );
};


export default Footer;