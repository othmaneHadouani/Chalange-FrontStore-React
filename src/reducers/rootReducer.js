import {detailProduct, storeProducts} from "../data";

const initialState  ={
    shops:storeProducts,
    detailshops:detailProduct,
    preferreds:[],
}
export  const reducer = (state=initialState ,action)=>{

    switch (action.type) {
        case 'addToPreferred': {
            const tempPreferreds =[...state.preferreds,action.payload]
            const newShops = state.shops.filter(shop => shop.id !== action.payload.id)
            return{
                ...state,
                preferreds:[...tempPreferreds],
                shops: newShops
            }
        }
        case 'deleteFromShops':{
            const newShops = state.shops.filter(shop => shop.id !== action.payload)

            return {
                ...state,

                shops: newShops
            }
        } case 'deleteFromPreferred':{
                const newPreferreds = state.preferreds.filter(preferred => preferred.id !== action.payload)

            return {
                ...state,

                preferreds: newPreferreds
            }
        }

        default :  return state

    }

}



