import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Header = ({
  
}) => {
  return (
    <View >
      <View style={styles.containerLogo}>
      <Image style={styles.logo}
          source={require('../../assets/LogoOlla.jpeg')}
        />
        <Text style={styles.nameApp}>A la olla</Text>
      </View>
       
        
        <View>
        
        <Text style={{ textAlign: "center", fontSize: 20, fontFamily: 'open-sans' }}>Menu de Lunes a Jueves</Text>
        </View>
      </View>
      
  )
}

export default Header

const styles = StyleSheet.create({
  
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
  },
  nameApp:{
    fontSize:20,
    marginLeft:20,
  },
  

})