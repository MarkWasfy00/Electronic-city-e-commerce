import React from 'react'
import { ProductType } from '../../Config/Types/ApiTypes'
import { decreaseQuantity, increaseQuantity, removeItem } from '../../redux/Basket/Basket'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks/Hooks'
import { getDiscount } from '../../Config/GlobalFunctions/Functions'
import Image from 'next/image'

type BasketCard = {
    children:ProductType
}




const BasketCard = ({children}:BasketCard) => {
    const reduxItems = useAppSelector((state) => state.basket.items.find(itm => itm.id  == children.Id)!)
    const dispatch = useAppDispatch()

  return (
    <article className='basket-card'>
        <div className="basket-card__remove">
            <i onClick={() => dispatch(removeItem({item:children.Id,price:getDiscount(children.Promotion,children.Price).newPrice}))} className="fa-solid fa-x"></i>
        </div>
        <div className="basket-card__holder">
            <div className="basket-card__holder__image">
                <Image alt={children.Title}  src={children.Images[0]} width={150} height={100} />
            </div>
            <div className="basket-card__holder__title">
                <div className="link-l-bold basket-card__holder__title--name">{children.Title}</div>
                <div className="link-id basket-card__holder__title--id">PC-{children.Id.slice(0, 5)}</div>
            </div>
            <div className="basket-card__holder__counter headline-xs">
                <div onClick={() => dispatch(decreaseQuantity({item:children.Id,price:getDiscount(children.Promotion,children.Price).newPrice}))} className="basket-card__holder__counter--subtract">-</div>
                <div className="basket-card__holder__counter--count">{reduxItems?.quantity}</div>
                <div onClick={() => dispatch(increaseQuantity({item:children.Id,price:getDiscount(children.Promotion,children.Price).newPrice,stock:children.Stock}))} className="basket-card__holder__counter--add">+</div>
            </div>
            <div className="basket-card__holder__price link-l-bold">{reduxItems?.price * reduxItems?.quantity}{children.Curr}</div>
        </div>
    </article>
  )
}

export default BasketCard