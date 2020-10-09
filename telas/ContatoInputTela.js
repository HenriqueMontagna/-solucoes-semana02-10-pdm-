import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import TiraFoto from '../components/TiraFoto';
import * as contatoActions from '../store/contatos-actions'

const ContatoInputTela = (props) => {

    const dispatch = useDispatch();

    const [nomeContato, setNomeContato] = useState("");

    const [numeroContato, setNumeroContato] = useState("");

    const [imagemURI, setImagemURI] = useState();

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }
    const capturarNome = (nomeContato) => {
        setNomeContato(nomeContato);
    }

    // const capturarContato = (nomeContato, numeroContato) => {
    //     return { nome: nomeContato, numero: numeroContato }
    // }

    const capturarNumero = (numeroContato) => {
        setNumeroContato(numeroContato);
    }

    const clearFields = () => {
        setNomeContato(''); setNumeroContato('')
    }

    const handleAddContact = () => {
        // props.navigation.getParam('onAddContact')({ nomeContato, numeroContato })
        dispatch(contatoActions.addContato(nomeContato, numeroContato, imagemURI));
        // props.navigation.goBack();
        props.navigation.navigate('ListaDeContatos');
        clearFields();
    }

    return (
        <View style={styles.viewInput}>
            <TextInput
                placeholder="Nome do Contato"
                placeholderTextColor="#888"
                textAlign="center"
                style={styles.textInput}
                onChangeText={capturarNome}
                value={nomeContato}
            />
            <TextInput
                placeholder="Numero do Contato"
                placeholderTextColor="#888"
                textAlign="center"
                style={styles.textInput}
                onChangeText={capturarNumero}
                value={numeroContato}
            />
            <TiraFoto onFotoTirada={fotoTirada}/>
            <Button
                color="#FF8000"
                title="Adicionar"
                onPress={handleAddContact}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    viewInput: {
        padding: 15,
        marginTop: 35,
        borderWidth: 2,
        borderColor: '#FAB953'
    },

    textInput: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 15
    },

})

export default ContatoInputTela;