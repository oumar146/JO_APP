import React, { useState } from 'react';
import Header from '../components/Header'
import Banner from '../components/Banner';
import ShopAPI from '../JO_API/ShopAPI';
import '../styles/shop.css'


const CitySelection = (props) => {
    // Récupérer les données des villes depuis les props
    const citiesData = props.data;

    // Utiliser un Set pour stocker les noms de ville uniques
    const uniqueCities = new Set(citiesData.map(city => city.ville));

    // Convertir le Set en tableau
    const citiesArray = Array.from(uniqueCities);

    return (
        <div className='citySelect'>
            <select onChange={props.handleCityChange}>
                <option value="">Choisissez une ville </option>
                {citiesArray.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))}
            </select>
        </div>
    );
};



const CityShops = ({ selectedCity, shopsData }) => {

    const filteredShops = shopsData.filter(shop => shop.ville === selectedCity);

    return (
        <div className='shops'>
            <h2>Boutiques officielles à {selectedCity}</h2>
            <ul>
                {filteredShops.map((shop, index) => (
                    <li key={index}>
                        <h3>{shop.title}</h3>
                        <p>Adresse: {shop.address}</p>
                        {(shop.instagram_link || shop.facebook_link || shop.facebook_link) && (<p>Liens:
                            <a href={shop.external_link} target="_blank" rel="noopener noreferrer">Site Web</a>
                            {shop.instagram_link && <a href={shop.instagram_link} target="_blank" rel="noopener noreferrer"> Instagram</a>} /
                            {shop.facebook_link && <a href={shop.facebook_link} target="_blank" rel="noopener noreferrer"> Facebook</a>} /
                            {shop.twitter_link && <a href={shop.twitter_link} target="_blank" rel="noopener noreferrer"> Twitter</a>}
                        </p>)}
                    </li>
                ))}
            </ul>
        </div>
    );
};


const Shop = () => {

    const [data, setData] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const text = 'Boutiques officielles';



    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <div>
            <ShopAPI setData={setData} />
            <Header />
            <Banner text={text} />
            <CitySelection data={data} handleCityChange={handleCityChange} />
            {selectedCity && <CityShops selectedCity={selectedCity} shopsData={data} />}
        </div>
    );
}

export default Shop;
