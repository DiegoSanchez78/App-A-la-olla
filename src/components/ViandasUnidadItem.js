import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ViandasUnidadItem = ({ item, onSelected }) => {

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details} > $ {item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ViandasUnidadItem

const styles = StyleSheet.create({

    breadItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc'
    },
    title: {
        fontSize: 20,
        // fontFamily: 'OpenSans_700Bold',
    },
    details: {
        fontSize: 10
    }
})
