import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'


const ImageItem = ({title,image, address, onSelect}) => {

  return (
    <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ImageItem

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
       
    },
    info:{
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    
    address: {
        color: '#777',
        fontSize: 16,
    },
    title:{
        color: 'red',
        fontSize: 18,
        marginBottom: 6
    }
})
