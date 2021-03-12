import {ADD_TO_CART} from '../constance'
const initialState={
    CardData:[]
}
export default function cardItem(state=initialState,action)
{
switch(action.type){
    case "ADD_TO_CART":
        console.warn('reducer',action)
        return{
            ...state,
            CardData:action.data
        }
        break;
        default:
            return state
}
}