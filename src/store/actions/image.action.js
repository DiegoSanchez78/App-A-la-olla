import * as FileSystem from 'expo-file-system'

export const ADD_IMAGE = 'ADD_IMAGE'


export const addImage = (title, image) => {
    //return { type: ADD_PLACE, payload: {title}}
    console.log(image)
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }

        dispatch({type: ADD_IMAGE, payload: { title,image: Path}})
    }
}