import { StyleSheet, Text,TextInput, Button, View ,Image} from 'react-native'
import React from 'react'

const NewItemHeader = ({
  onChangeText,
  itemText,
  addItem,
}) => {
  return (
    <View >
      
      <View style={styles.containerLogo}>
      <Image style={styles.logo}
        source={require('../../assets/LogoOlla.jpeg')}
      />
       <Text style={styles.nameApp}>A la olla</Text>
      </View>
     
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Ingrese el menu diario' 
        style={styles.input}
        onChangeText={onChangeText}
        value={itemText}
        />
        <Button title='Agregar'
        onPress={addItem}
        />
      </View>
      
    </View>
  )
}

export default NewItemHeader

const styles = StyleSheet.create({
  inputContainer:{
    marginTop: 30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    width:'70%',
    height: 40,
    borderBottomColor:'black',
    borderBottomWidth:1,
  },

  containerLogo: {
    width: 70,
    height: 70,
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent:'space-between',
    alignItems:'center',
   
  },
  logo: {
    width: "100%",
    height:"100%",
    borderRadius:200,

    // marginRight: 10,
    // marginBottom: 12,
    // marginTop: 12
  },
  nameApp:{
    fontSize:20,
    marginLeft:20,
  },
  

})