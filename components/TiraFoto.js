import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import Cores from '../constantes/Cores';
import * as ImagePicker from 'expo-image-picker';

const TiraFoto = (props) => {

    const [imagemURI, setImagemURI] = useState();
    const tirarFoto = async () => {
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        });
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }

    return (
        <View style={styles.principal}>
            <View style={styles.previewImagem}>
                {
                    imagemURI ?
                        <Image
                            source={{ uri: imagemURI }}
                            style={styles.image}
                        />
                        :
                        <Text>Nenhuma Foto</Text>
                }
            </View>
            <Button
                title="Tirar Foto"
                color={Cores.primary}
                onPress={tirarFoto}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    principal: {
        alignItems: 'center',
        marginBottom: 16
    },

    previewImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },

    image: {
        width: '100%',
        height: '100%'
    }

})

export default TiraFoto;