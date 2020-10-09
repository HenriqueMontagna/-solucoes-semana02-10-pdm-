import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const ContatoInput = (props) => {

    const [nomeContato, setNomeContato] = useState("");

    const [numeroContato, setNumeroContato] = useState("");

    const capturarNome = (nomeContato) => {
        setNomeContato(nomeContato);
    }

    const capturarContato = (nomeContato, numeroContato) => {
        return {nome: nomeContato, numero: numeroContato}
    }

    const capturarNumero = (numeroContato) => {
        setNumeroContato(numeroContato);
    }

    const clearFields = () => {
        setNomeContato(''); setNumeroContato('')
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
            <Button
                color="#FF8000"
                title="Adicionar"
                onPress={() => {
                    handleAddContact;
                    clearFields();
                }
              }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    viewInput: {
        padding: 10,
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

export default ContatoInput;