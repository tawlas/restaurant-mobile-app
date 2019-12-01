import React, { useState, useEffect } from 'react'

import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (term) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit:50,
                    term:term,
                    location: 'san jose'
                }
        });
        setResults(response.data.businesses)
        } catch (e) {
            console.log(e)
            setErrorMessage('Something went wrong')
            }
    }
    useEffect(()=>{searchApi('burger')}, [])

    return [searchApi, results, errorMessage];
}