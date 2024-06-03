import { NavLink } from 'react-router-dom';


const HomeMain = (props) => {
    return (
        <div className="card">
            <NavLink to='/faq'>
                <img src='https://data.paris2024.org/assets/theme_image/olympiade-culturelle.jpg' alt='' />
            </NavLink>
        </div>
    )
}

export default HomeMain;