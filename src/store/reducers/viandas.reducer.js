import {VIANDASPRODUCT} from '../../data/viandasData'
import { SELECT_VIANDA ,FILTER_VIANDAS } from '../actions/viandas.action';

const initialState = {
    viandas: VIANDASPRODUCT,
    filterViandas: [],
    selected:null,
}

const ViandasReducer = (state=initialState,action)=> {
    switch(action.type){
        case SELECT_VIANDA:
            return {
                ...state,
                selected: state.viandas.find(bread=>bread.id ===action.breadId)
            }
        case FILTER_VIANDAS:
            return {
                    ...state, filterViandas:state.viandas.filter(bread=>bread.categoryId ===action.categoryId)
            }
        default:
            return state
    }
}

export default ViandasReducer;