import { View } from 'react-native';
import React from 'react';


const DetalhesDoLugar = (props) => {

    return (
        <View></View>
    )
}

DetalhesDoLugar.navigationOptions = (dadosNav) =>  {
    return {
        headerTitle: dadosNav.navigation.getParam('nomeContato')
    }
}

export default DetalhesDoLugar;