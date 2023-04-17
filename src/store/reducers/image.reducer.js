import { ADD_IMAGE } from '../actions/image.action'
import Image from '../../components/models/Image'

const initialState = {
    images: []
}

const ImageReducer =(state = initialState, action) => {

    switch (action.type) {
        case ADD_IMAGE:
            const newImage = new Image(Date.now(), action.payload.image)
            return {
                ...state,
                images: state.images.concat(newImage)
            }
        default:
            return state
    }
}

export default ImageReducer