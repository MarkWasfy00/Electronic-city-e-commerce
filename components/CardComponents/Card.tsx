import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
//---------
import { Rating } from '@mui/material';
import { ProductType } from '../../Config/Types/ApiTypes';
import { useAppDispatch } from '../../redux/Hooks/Hooks';
import { addItem } from '../../redux/Basket/Basket';
import { getDiscount,getDateOfItem } from '../../Config/GlobalFunctions/Functions';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//checked 

type CardProps = {
  children:ProductType
}


const Card = ({children}:CardProps) => {
  const dispatch = useAppDispatch();

  return (
    <AnimationOnScroll animateIn='animate__slideInRight' animateOnce>
      <article className='card'>
          <div className="card__stock">
            <div className="card__stock__in link-s" style={children.Stock > 0 ? {color:'green'}:{color:'red'}}>{children.Stock > 0 ? 'In stock': 'Out of stock'}</div>
            <i className="fa-solid fa-scale-balanced card__stock__available"></i>
          </div>
          <Link href={`/catalog/${children.Category}/${children.Id}`} passHref>
            <div className="card__main-img">
                <Image src={children.Images[0]} alt={children.Title} width={300} height={300} objectFit="contain" />
            </div>
          </Link>
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
              <del className={` link-s${children.Promotion ? '':' disactive'}`}>{children.Curr}{children.Price}</del>
              <div className='link-l'>{children.Curr}{getDiscount(children.Promotion,children.Price).newPrice}</div>
            </div>
            <button className={`card__footer__cta link-s${children.Stock <= 0 ? ' card__footer__cta--disabled':''}`} onClick={() => dispatch(addItem({item:children.Id,price:getDiscount(children.Promotion,children.Price).newPrice}))} >Add to cart</button>
          </div>
          <div className="card__tags">
            <div className={`card__tags__promotion link-s${children.Promotion ? '':' disactive'}`}>{`Promotion -${children.Promotion}%`}</div>
            <div className={`card__tags__new-product link-s ${getDateOfItem(children.TimeStamp?.seconds) ? '':' disactive' }`}>New product</div>
          </div>
      </article>
    </AnimationOnScroll>
  )
}

export default Card