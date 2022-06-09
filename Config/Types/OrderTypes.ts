export type OrderArray = OrderItem[]



export type OrderItem = {
    amount:number
    id:string
    name:string
    timestamp:{
        seconds:number
        nanoseconds:number
    }
    items:StripeItem[]

}


export type StripeItem = {
    amount_total:number
    description:string
    id:string
    quantity:number
}