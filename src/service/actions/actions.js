import {Add_TO_CART}from '../constance';
export const addToCart=(data)=>{
    console.warn("action",data)
    return{
        type:'ADD_TO_CART',
        data:data
    }
}


