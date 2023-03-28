import { StyleSheet,FlatList } from 'react-native'
import React from 'react'
import ViandasItem from '../components/ViandasItem'
// import { CATEGORIAS } from '../data/categorias'
import { useSelector, useDispatch} from 'react-redux'
import { selectCategory } from '../store/actions/category.action'

const CategoriaViandas = ({navigation}) => {

  const categories = useSelector(state=>state.categories.categories)
  const dispatch = useDispatch()

  const onSelectGridItem = (item) => {
    dispatch(selectCategory(item.id))
    navigation.push("Viandas",{name:item.title})
}

const renderGridItem = ({ item }) => <ViandasItem item={item} onSelect={onSelectGridItem} />



  return (
    <FlatList
    data={categories}
    keyExtractor={(item) => item.id}
    renderItem={renderGridItem}
    numColumns={1}
/>
  )
}

export default CategoriaViandas

const styles = StyleSheet.create({})