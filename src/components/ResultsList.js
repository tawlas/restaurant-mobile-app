import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    console.log(results)
    if (!results.length) {
        return null
    }
    return (
        
        <View style={styles.viewStyle} >
            <Text style={styles.titleStyle} >{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id }
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={()=>{navigation.navigate('ResultsShow', {id:item.id})}}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity> 
                )
            }}
            />            
        </View>

    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'pink',
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
        // borderRadius:5,
        marginBottom:10,
    }
})

export default withNavigation(ResultsList)