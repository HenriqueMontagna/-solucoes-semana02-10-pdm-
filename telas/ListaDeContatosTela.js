import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Platform, Alert } from 'react-native';
import { ContatoItem } from '../components/ContatoItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton1 from '../components/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import * as contatosActions from '../store/contatos-actions' 

const ListaDeContatosTela = (props) => {

  
  const contatos = useSelector(estado => estado.contatos.contatos)
  
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(contatosActions.listarContatos())
  });

  const removerContato = (id) => {

    Alert.alert(
      'Confirmação',
      `Tem Certeza Que Deseja Excluir o Contato ${contatos.find(contato => contato.key == id).nomeContato}?`,
      [
        {
          text: 'Sim, desejo!',
          onPress: () => {
            dispatch(contatosActions.removeContato(id));
          }
        },
        {
          text: 'Cancelar'
        }
      ],
      {cancelable: false}
    )


  }



  return (
    <SafeAreaView style={styles.viewGeral}>

      <FlatList
        data={contatos}
        keyExtractor = {contato => contato.id}
        renderItem={(contato) => (
        <ContatoItem 
          onSelect = {() => {
            props.navigation.navigate('DetalhesDoContato', { nomeContato: contato.item.nomeContato, numeroContato: contato.item.numeroContato, idContato: contato.id })
            // console.warn(contato.item.key)
          }}
          onDelete = {removerContato}
          imagem = {contato.item.imagemURI}
          nomeContato = {contato.item.nomeContato}
          numeroContato = {contato.item.numeroContato}
          idContato = {contato.item.key}
        />
        )
      }
      />


    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  viewGeral: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }

});

export default ListaDeContatosTela;

ListaDeContatosTela.navigationOptions = options => {
    return {
        headerTitle: 'Contatos',
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton1}>
                    <Item 
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={ () => {
                                options.navigation.navigate('NovoContato', {onAddContact: options.navigation.getParam('onAddContact')})
                        }}
                    />

                </HeaderButtons>
            )
        }
    }

}