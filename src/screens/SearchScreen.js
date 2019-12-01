import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { tsPropertySignature } from '@babel/types'

import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => {
                    setTerm(newTerm);
                }}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text> {errorMessage} </Text> : null}
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
            <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
            <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
            </ScrollView> 
        </>

    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        color: 'green'
    },
    viewStyle: {
        marginTop: 10
    }
})

export default SearchScreen