// import React from 'react'
// import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native'
// import { useDispatch } from 'react-redux'
// import { addImage } from '../store/actions/image.action'
// import ImageSelector from '../components/ImageSelector'
// import { COLORS } from "../constants/color";


// const UserScreen = ({ navigation }) => {
//     const dispatch = useDispatch()
//     // const [titleValue, setTitleValue] = React.useState('')
//     const [imageValue, setImageValue] = React.useState('')

//     // const titleChangeHandler = text => {
//     //     setTitleValue(text)
//     // }


//     const savePlaceHandler = () => {
//         dispatch(addImage(imageValue))
//         navigation.navigate('User')
//     }





//     return (
//         <ScrollView>
//             <View style={styles.container}>
//                 <Text style={styles.label}>Titulo</Text>
//                 <TextInput style={styles.input} onChangeText={titleChangeHandler}/>
//                 <ImageSelector onImage={image=>setImageValue(image)} />
//                 <Button title="Guardar" color={COLORS.primary} onPress={savePlaceHandler} />
//             </View>
           
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         margin: 30,
//     },
//     label: {
//         fontSize: 18,
//         marginBottom: 16
//     },
//     input: {
//         borderBottomColor: '#ccc',
//         borderBottomWidth: 1,
//         marginBottom: 16,
//         paddingHorizontal: 2,
//         paddingVertical: 4
//     }
// })

// export default UserScreen