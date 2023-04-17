import React from 'react'
import { FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import ImageItem from '../components/ImageItem'

const UserListScreen = ({navigation}) => {
    const images = useSelector(state=>state.images.images)
    console.log(images)
    const renderUserItem = (data) => (
        <ImageItem  
            title={data.item.title}
            image={data.item.image}
            address="Calle falsa 123"
            onSelect={()=>navigation.navigate("Detalle")}
        />
    )

    return (
        
        <FlatList style={{flex:1}}
            data={images}
            renderItem={renderUserItem}
            keyExtractor ={item => item.id}
        />
        
    )
}



export default UserListScreen
