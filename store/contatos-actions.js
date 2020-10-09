import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';
import { inserirContato, buscarContatos, deletarContato } from '../helpers/db';

export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';
export const REMOVER_CONTATO = 'REMOVER_CONTATO';

export const listarContatos = () => {
    return async dispatch => {
        try {
            const resultadoDB = await buscarContatos();
            console.log(resultadoDB);
            dispatch({
                type: LISTA_CONTATOS,
                contatos: resultadoDB.rows._array || []
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}


export const addContato = (nomeContato, numeroContato, imagemURI) => {

    return async dispatch => {
        const nomeArquivo = imagemURI.split('/').pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;

        try {
            await FileSystem.moveAsync({
                from: imagemURI,
                to: novoPath
            });

            const resultadoDB = await inserirContato(nomeContato, numeroContato, novoPath);
            console.warn(resultadoDB);

            dispatch({
                type: ADD_CONTATO,
                dadosContato: {
                    id: resultadoDB.insertId,
                    nomeContato,
                    numeroContato,
                    imagemURI: novoPath
                }
            })
        } catch (error) {
            console.log(error);
            throw error;
        }


    }

}

export const removeContato = (id) => {
    return async dispatch => {
        try {
            await deletarContato(id);
            const resultadoDB = await buscarContatos();
            console.warn(resultadoDB)

            dispatch({
                type: LISTA_CONTATOS,
                contatos: resultadoDB.rows._array || []
            })
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao excluir o contato.');
            throw error;
        }
    }
}