import { NavLink } from 'react-router-dom';
import '../styles/homeMain.css'

const HomeMain = (props) => {
    return (
        <div className="features">
            <NavLink to='/faq' className='feature'>
                <img src='https://data.paris2024.org/assets/theme_image/olympiade-culturelle.jpg' alt='' />
            </NavLink>

            <NavLink to='/shop' className='feature'>
                <img src='https://data.paris2024.org/assets/theme_image/boutiques-officielles.jpg' alt='' />
            </NavLink>

        </div>
    )
}

export default HomeMain;