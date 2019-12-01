import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const ResultsDetail = ({result}) => {

    return (
        <View style={styles.viewStyle} >
            <Image 
                source={{uri:result.image_url}} 
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle} >{result.name}</Text>
            <Text style={{}} > {result.rating} Stars,{result.review_count} Reviews</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width:250,
        height:120,
        borderRadius: 4
    },
    nameStyle: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'blue',
        marginBottom: 5
    },
    inputStyle: {
        fontSize: 18,
        flex:1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal:14
    },
    viewStyle: {
        borderRadius:5,
        marginLeft:15,
    }
})

export default ResultsDetail