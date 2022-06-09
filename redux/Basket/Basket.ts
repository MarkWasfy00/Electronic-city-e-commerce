import { createSlice } from '@reduxjs/toolkit'


export type ItemsProps = {
    id:string
    quantity:number
    price:number
}

type initialStateProps = {
    items:ItemsProps[]
    totalPrice:number
}

const initialState:initialStateProps = {
    items:[],
    totalPrice:0,
}



export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
     addItem: (state,{payload}) => {
         if(!state.items.find(obj => obj.id == payload.item)){
            state.items.push({id:payload.item,quantity:1,price:payload.price})
            state.totalPrice += payload.price
         }
     },
     removeItem: (state,{payload}) => {
         state.items = state.items.filter(item => item.id !== payload.item)
         const TPrice = state.items.map(obj => obj.price * obj.quantity)
         state.totalPrice = TPrice.length > 0 ? TPrice.reduce((arr,curr) => arr + curr):0
     },
     increaseQuantity:(state,{payload}) => {
        state.items.map(obj => obj.id == payload.item && obj.quantity < payload.stock ? obj.quantity++:'')
        const TPrice = state.items.map(obj => obj.price * obj.quantity)
        state.totalPrice = TPrice.reduce((arr,curr) => arr + curr)
     },
     decreaseQuantity:(state,{payload}) => {
        state.items.map(obj => obj.id == payload.item && obj.quantity > 1 ? obj.quantity--:'')
        const TPrice = state.items.map(obj => obj.price * obj.quantity)
        state.totalPrice = TPrice.reduce((arr,curr) => arr + curr)
     },
     setFromLocalStorage:(state,{payload}) => {
         state.items = payload.localBasketItems
         state.totalPrice = payload.localTotalPrice
     }
  },
})

export const {addItem,removeItem, increaseQuantity,decreaseQuantity,setFromLocalStorage} = basketSlice.actions

export default basketSlice.reducer