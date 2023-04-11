import {StyleSheet,  View } from 'react-native'
import React from 'react'
import ImageSelector from '../components/ImageSelector'

const UserScreen = () => {


  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <ImageSelector onImage={image=>console.log(image)}/>
      </View>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingBottom: 120
  },
  list: {
    flex: 1,
  },
  footer:{
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm:{
    backgroundColor: '#ccc',
    borderRadius: 20,
    padding:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  total:{
    flexDirection: 'row',
  },
  text:{
    fontSize: 18,
    padding: 8
  }
})