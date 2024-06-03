import '../styles/banner.css'
import FaqAPI from '../JO_API/FaqAPI';
import React, { useState } from 'react';

const Searchbar = (props) => {
    const [submittedQuery, setSubmittedQuery] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        props.setQuery(value);
    }

    const handleSubmit = () => {
        if (props.query.length > 0) {
            const filteredResults = props.data.filter(item =>
                item.label.toLowerCase().includes(props.query.toLowerCase())
            );
            props.setResults(filteredResults);
            setSubmittedQuery(props.query);
            props.setQuery('');
        } else {
            props.setResults([]);
            setSubmittedQuery('');
        }
    }

    return (
        <div className='banner-container'>
            <div className='search-bar'>
                <input
                    type="text"
                    value={props.query}
                    onChange={handleSearch}
                    placeholder="Rechercher..."
                />
                <button type='button' onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </button>
            </div>

            {/* <div className='results'>
                {submittedQuery && props.results.length > 0 ? (
                    props.results.map(result => (
                        <div key={result.label}>
                            <h3>{result.label}</h3>
                            <p>{result.body}</p>
                            <a href={result.url} target="_blank" rel="noopener noreferrer">En savoir plus</a>
                        </div>
                    ))
                ) : (
                    submittedQuery && <p>Aucun résultat trouvé</p>
                )}
            </div> */}
        </div >
    );
};




const Banner = (props) => {
    const [data, setData] = useState([]);

    return (
        <div className="bg-banner">
            <h1>
                PARIS 2024
                LA PLATEFORME DE PARTAGE DE DONNÉES
            </h1>
            <FaqAPI setData={setData} />
            <Searchbar data={data} query={props.query} setQuery={props.setQuery} results={props.results} setResults={props.setResults} />
        </div>
    )
}

export default Banner;