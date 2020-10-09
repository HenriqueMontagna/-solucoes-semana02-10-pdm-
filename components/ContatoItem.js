import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


const ContatoItem = (props) => {

    // () => props.onDelete(props.idContato)  // () => console.warn(props.idContato)

    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.itemList} onLongPress={() => props.onDelete(props.idContato)}>
            <Image 
                style = {styles.image}
                source = {{ uri: props.imagem } }
            />
            <View style={styles.infos}>
                <Text style={styles.itemListNome}>{props.nomeContato}</Text>
                <Text>{props.numeroContato}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    itemList: {
        margin: 10,
        padding: 30,
        backgroundColor: '#FFE4B5',
        flexDirection: 'row',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        alignItems: 'center'
    },

    itemListNome: {
        fontSize: 25,
        marginBottom: 3
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 1,
        backgroundColor: '#FFB',
        borderColor: '#F00'
    },
    
    infos: {
        padding: 10
    }


});

export { ContatoItem };