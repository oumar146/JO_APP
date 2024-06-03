import '../styles/faq.css'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Results from '../components/Results';
import FaqAPI from '../JO_API/FaqAPI';
import React, { useState } from 'react';
import Searchbar from '../components/SearchBarFaq';


const Faq = () => {
    const [data, setData] = useState([]);
    const [faqResults, setFaqResults] = useState([]);
    const [submittedQuery, setSubmittedQuery] = useState('');
    const text = 'Faq'
    return (
        <div className="bg-faq">
            <Header />
            <FaqAPI setData={setData} />
            <Banner
                text={text}
                submittedQuery={submittedQuery} setSubmittedQuery={setSubmittedQuery}
                results={faqResults} setResults={setFaqResults}>

                <Searchbar data={data} submittedQuery={submittedQuery} setSubmittedQuery={setSubmittedQuery} results={faqResults} setResults={setFaqResults} />

            </Banner>
            <Results submittedQuery={submittedQuery} faqResults={faqResults} />



        </div>
    )
}

export default Faq;