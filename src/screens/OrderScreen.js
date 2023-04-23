import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { ORDERS } from '../data/orders'
import OrderItems from '../components/OrderItems'
import { getOrders,deleteOrder } from '../store/actions/orders.action'

const OrderScreen = () => {

    const dispatch = useDispatch()
    const orders = useSelector(state=>state.orders.list)

    React.useEffect(()=>{
        dispatch(getOrders())
      },[])

    const onDelete = (id) => {
        dispatch(deleteOrder(id))
    }

    const renderItem = ({ item }) => <OrderItems item={item} onDelete={onDelete}/>

  return (
    <FlatList
    style={styles.screen}
        data={orders}
        keyExtractor={item => item.id}
        renderItem={renderItem}
     />
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    screen: {
        marginTop: 40,
        flex: 1,
    }
})
