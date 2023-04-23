import { StyleSheet,FlatList} from 'react-native'
import React  from 'react'
// import { VIANDASPRODUCT } from '../data/viandasData'
import ViandasUnidadItem from '../components/ViandasUnidadItem'
import { useSelector,useDispatch } from 'react-redux'
import { selectBread, filterViandas} from '../store/actions/viandas.action'
import { useEffect } from 'react'

const Viandas = ({route ,navigation}) => {
  // const { categoryId } = route.params

  // const breads = VIANDASPRODUCT.filter(bread => bread.category === categoryId)
  const categoryBreads = useSelector(state=>state.breads.filterViandas)
  const dispatch = useDispatch()
  const category = useSelector(state=>state.categories.selected)
 
  useEffect(()=>{
    dispatch(filterViandas(category.id))
},[])


  const handleOnSelected = (item) => {
    dispatch(selectBread(item.id))
    navigation.navigate('Detail', {
      name:item.title,
    })
  }

  const renderBreadItem = ({ item }) => (<ViandasUnidadItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  )
}

export default Viandas

const styles = StyleSheet.create({})