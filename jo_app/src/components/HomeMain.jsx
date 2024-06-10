import { NavLink } from 'react-router-dom';
import '../styles/homeMain.css';

const HomeMain = (props) => {
    return (
        <div className="features">
            <NavLink to='/faq' className='feature'>
            <div>
                <img src='https://data.paris2024.org/assets/theme_image/olympiade-culturelle.jpg' alt='' />
                <h4>
                    FAQ - Jeux Olympiques et Paralympiques Paris 2024
                </h4>
                <p>Découvrez toutes les réponses à vos questions sur les Jeux Olympiques et Paralympiques de Paris 2024. Retrouvez ici des informations complètes sur les sites de compétitions, les boutiques officielles, la billetterie, les transports, l'hébergement et bien plus encore. Cette section est conçue pour vous offrir une expérience inoubliable et vous aider à planifier votre participation à cet événement historique.</p>
                </div>
            </NavLink>

            <NavLink to='/shop' className='feature'>
            <div>
                     <img src='https://data.paris2024.org/assets/theme_image/boutiques-officielles.jpg' alt='' />
                <h4>Les boutiques officielles Paris 2024</h4>
                <p>Découvrez ce jeu de données complet répertoriant toutes les boutiques officielles de Paris 2024. 
                    Explorez la liste exhaustive et accédez aux informations essentielles.
                </p>
            </div>
           
            </NavLink>
        </div>
    );
}

export default HomeMain;
