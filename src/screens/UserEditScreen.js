import {Button, StyleSheet,  View,ScrollView, Text,TextInput} from 'react-native'
import React from 'react'
import ImageSelector from '../components/ImageSelector'
import { useDispatch } from 'react-redux'
import { addImage } from '../store/actions/image.action'
import { COLORS } from "../constants/color";

const UserEditScreen = ({navigation}) => {

  const dispatch = useDispatch()
    const [titleValue, setTitleValue] = React.useState('')
    const [imageValue, setImageValue] = React.useState('')

    const titleChangeHandler = text => {
        setTitleValue(text)
    }


    const savePlaceHandler = () => {
        dispatch(addImage(titleValue,imageValue))
        navigation.navigate('User')
    }

    
    return (
      <ScrollView>
          <View style={styles.container}>
               <Text style={styles.label}>Titulo</Text> 
               <TextInput style={styles.input} onChangeText={titleChangeHandler}/> 
              <ImageSelector onImage={image=>setImageValue(image)} />
              <Button title="Guardar" color={COLORS.primary} onPress={savePlaceHandler} />
          </View>
         
      </ScrollView>
  )


  // return (
  //   <View style={styles.container}>
  //     <View style={styles.footer}>
  //       <ImageSelector onImage={image=>console.log(image)}/>
  //       <Button title='Guardar imagen' onPress={console.log({uri: image})}/>
  //       <Image  source={{uri: image}}/>
  //      { console.log({uri: image})}
  //     </View>
      
  //   </View>
  // )
}

export default UserEditScreen

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