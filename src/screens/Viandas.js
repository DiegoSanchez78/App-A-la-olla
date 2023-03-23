import { StyleSheet,FlatList} from 'react-native'
import React from 'react'
import { VIANDASPRODUCT } from '../data/viandasData'
import ViandasUnidadItem from '../components/ViandasUnidadItem'

const Viandas = ({route ,navigation}) => {
  const { categoryId } = route.params

  const breads = VIANDASPRODUCT.filter(bread => bread.category === categoryId)
 

  const handleOnSelected = (item) => {
    navigation.navigate('Detail', {
      bread: item
    })
  }

  const renderBreadItem = ({ item }) => (<ViandasUnidadItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
      data={breads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  )
}

export default Viandas

const styles = StyleSheet.create({})