import React from 'react'
import { TextInput, View, StyleSheet, } from 'react-native'
import { tsPropertySignature } from '@babel/types'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return (
        <View style={styles.viewStyle}>
            <Feather name='search' size={30} />
            <TextInput 
                autoCapitalize='none'
                style={styles.inputStyle}
                placeholder='Search'
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={onTermSubmit}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        color: 'green'
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
        backgroundColor: '#F0EEEE',
        borderRadius:5,
        margin:10,
        flexDirection:'row'
    }
})

export default SearchBar