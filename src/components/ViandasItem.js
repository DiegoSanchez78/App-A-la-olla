import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

import React from 'react'

const ViandasItem = ({ item, onSelect }) => {
  return (
    <View style={styles.viandaItem}>
    <TouchableOpacity onPress={() => onSelect(item)} style={[styles.container, { backgroundColor: item.color}]}>
        <View>
        <Text style={styles.title}>{item.title}</Text>
        </View>
    </TouchableOpacity>
</View>
  )
}

export default ViandasItem

const styles = StyleSheet.create({
  viandaItem: {
    flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150,
},
container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    padding: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
},
title: {
    fontSize: 20,
    // fontFamily: 'open-sans-bold',
},
details: {
    fontSize: 10
}
})