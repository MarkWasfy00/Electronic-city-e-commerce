// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { ProductType } from '../../Config/Types/ApiTypes';
import { ItemsProps } from '../../redux/Basket/Basket';
import { getDiscount } from '../../Config/GlobalFunctions/Functions';
import axios from 'axios';



type FilterItemsType = ProductType & {Quantity:number}
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const { items , email } = req.body
    const getProducts = await axios.get(process.env.HOST +'/api/Products')
    const basketItems = items
    const filterItems = basketItems.map((item:ItemsProps) => item = {
        ...getProducts.data.find((product:ProductType) => item.id === product.Id),
         Quantity:item.quantity
    })

    
    const checkedItems = filterItems.map((item:FilterItemsType) => ({
        price_data: {
            currency: 'egp',
            product_data: {
                name: item.Title,
                images:item.Images,
            },
            unit_amount: getDiscount(item.Promotion,item.Price).newPrice * 100,
        },
        quantity: item.Quantity,
        
    }))

    const session = await stripe.checkout.sessions.create({
        line_items: checkedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/`,
        metadata: {
            email,
        }
    });
    
    try {
        res.status(200).json({ url: await session.url })
    } catch (e:any) {
        res.status(500).json({ error: `${e.message}` })
    }
    

}
