import { Rating, Snackbar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ProductType } from '../../Config/Types/ApiTypes'
import { useAppDispatch } from '../../redux/Hooks/Hooks'
import { addItem } from '../../redux/Basket/Basket'
import { getDiscount,getDateOfItem } from '../../Config/GlobalFunctions/Functions'
import Image from 'next/image'

type CardProps = {
  children:ProductType
}





const Card = ({children}:CardProps) => {
  const dispatch = useAppDispatch();

  

 

  
  return (
    <article className='card'>
        <div className="card__stock">
          <div style={children.Stock > 0 ? {color:'green'}:{color:'red'}} className="card__stock__in link-s">{children.Stock > 0 ? 'In stock': 'Out of stock'}</div>
          <i className="fa-solid fa-scale-balanced card__stock__available"></i>
        </div>
        <div className="card__main-img">
          <Image src={children.Images[0]} alt={children.Title} width={300} height={300} objectFit="contain" />
          {/* <Link href={`/catalog/${children.Category}/${children.Id}`} passHref>
            
          </Link> */}
        </div>
        <div className="card__info">
          <div className="card__info__id link-id">PC-{children.Id.slice(0, 5)}</div>
          <div className="card__info__title link-l-bold">{children.Title}{children.Curr}</div>
          <div className="card__info__rating">
            <Rating name="simple-controlled"/>
            <div className="card__info__rating__reviews">
              <i className="fa-solid fa-message"></i>
              <a href="#" className="card__info__rating__reviews__total link-xxs">2 reviews</a>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="card__footer__price ">
            <del className={`card__footer__price--old link-s${children.Promotion ? '':' disactive'}`}>{children.Curr}{children.Price}</del>
            <div className="card__footer__price--new link-l-bold" >{children.Curr}{getDiscount(children.Promotion,children.Price).newPrice}</div>
          </div>
          <button onClick={() => dispatch(addItem({item:children.Id,price:getDiscount(children.Promotion,children.Price).newPrice}))} className={`card__footer__cta link-s${children.Stock <= 0 ? ' card__footer__cta--disabled':''}`}>Add to cart</button>
        </div>
        <div className="card__tags">
          <div className={`card__tags__promotion link-s${children.Promotion ? '':' disactive'}`}>{`Promotion -${children.Promotion}%`}</div>
          <div className={`card__tags__new-product link-s ${getDateOfItem(children.TimeStamp?.seconds) ? '':' disactive' }`}>New product</div>
        </div>
    </article>
  )
}

export default Card