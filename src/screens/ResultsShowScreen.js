import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { tsPropertySignature } from '@babel/types'
import yelp from '../api/yelp'
import ResultsDetail from '../components/ResultsDetail'
import { FlatList } from 'react-native-gesture-handler'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    console.log(result)
    const id = navigation.getParam('id')
    useEffect(() => {
        getResult(id)
    } , [])
    if (!result) {
        return null
    }
    return (
        <>
            <Text> {result.name} </Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style={styles.imageStyle} source={{uri:item}} />
            }}
            />
        </>

    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        color: 'green'
    },
    imageStyle:{
        height:120,
        width:200
    },
    viewStyle: {
        marginTop: 10
    }
})

export default ResultsShowScreen