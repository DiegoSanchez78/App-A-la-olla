import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'



const ImageSelector = ({onImage}) => {
    const [pickedUri, setPickedUri] = useState()

    const VerifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        console.log(status)
        if(status !== 'granted') {
            Alert.alert('Permisos insuficientes')
            return false
        }
        return true

     }

    const handlerTakeImage = async () => {
        const isCameraOk = await VerifyPermissions()
        if (!isCameraOk) return
        
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true, 
            aspect: [1,1],
            quality: 0.8,
        })
        console.log(image.assets)
        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
     }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri
                    ? (<Text>No hay imagen seleccionada...</Text>)
                    : (<Image style={styles.image} source={{ uri: pickedUri }} />
                    )
                }
            </View>
            <Button
                title="Tomar foto perfil de Usuario"
                onPress={handlerTakeImage}
                 >
                    {!pickedUri
                    ? (<Text>No hay imagen seleccionada...</Text>)
                    : (<Button title="Tomar foto perfil de Usuario"/>
                    )
                }
                </Button>
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        width: 200,
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWith: 1
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,

    }
})