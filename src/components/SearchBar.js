import React from 'react';
import { View, Text, StyleSheet, TextInput} from "react-native";
import { Feather } from "@expo/vector-icons"
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.inputIcon} name="search" />
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
             style={styles.inputStyle}
              placeholder="Search"
                  value={term}
                  onChangeText={onTermChange}
                  onEndEditing={onTermSubmit}
                  
                  />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius: 5,
        marginHorizontal:15,
        marginTop: 10,
        flexDirection:"row"
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    inputIcon: {
       fontSize: 35,
       alignSelf:"center"
    }
})

export default SearchBar