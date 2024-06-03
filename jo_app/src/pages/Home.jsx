import Header from '../components/Header'
import Banner from '../components/Banner';
import React, { useState } from 'react';
const Home = () => {
    const [query, setQuery] = useState('');
    const [faqResults, setFaqResults] = useState([]);

    return (
        <div>
            <Header />
            <Banner query={query} setQuery={setQuery}
                results={faqResults} setResults={setFaqResults} />
        </div>
    )
}

export default Home;
