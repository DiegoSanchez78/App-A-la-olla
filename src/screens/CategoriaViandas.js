import { StyleSheet,FlatList } from 'react-native'
import React from 'react'
import ViandasItem from '../components/ViandasItem'
import { CATEGORIAS } from '../data/categorias'

const CategoriaViandas = ({navigation}) => {

  const onSelectGridItem = (item) => {
    navigation.navigate('Viandas', {
        categoryId: item.id,
        categoryName: item.title
    })
}

const renderGridItem = ({ item }) => <ViandasItem item={item} onSelect={onSelectGridItem} />



  return (
    <FlatList
    data={CATEGORIAS}
    keyExtractor={(item) => item.id}
    renderItem={renderGridItem}
    numColumns={2}
/>
    // <View>
    //   <Text>Categorias</Text>
    //   <Button
    //   title="Elegir categoria"
    //   onPress={()=> {navigation.navigate('Viandas')}}/>
    // </View>
  )
}

export default CategoriaViandas

const styles = StyleSheet.create({})