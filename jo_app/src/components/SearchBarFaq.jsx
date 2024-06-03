import { useState } from "react";

const Searchbar = (props) => {
    const [query, setQuery] = useState('');


    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    const handleSubmit = () => {
        if (query.length > 0) {
            const filteredResults = props.data.filter(item =>
                item.label.toLowerCase().includes(query.toLowerCase())
            );
            props.setResults(filteredResults);
            props.setSubmittedQuery(query);
            setQuery('');
        } else {
            props.setResults([]);
            props.setSubmittedQuery('');
        }
    }

    return (
        <div className='banner-container'>
            <div className='search-bar'>
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Rechercher..."
                />
                <button type='button' onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </button>
            </div>
        </div >
    );
};

export default Searchbar