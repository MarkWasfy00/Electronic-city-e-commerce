import Link from 'next/link'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks/Hooks'
import {useEffect} from 'react'
import { setFromLocalStorage } from '../../redux/Basket/Basket'



type InfoNavProps = {
  city?: string
  totalPrice?:number
}


const InfoNav = (props:InfoNavProps) => {

  const reduxItems = useAppSelector((state) => state.basket.items);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);
  const dispatch = useAppDispatch();
  


  

  useEffect(() => {
    const localBasketItems =  localStorage.getItem('localBasketItems')
    const localTotalPrice =  localStorage.getItem('localTotalPrice')
    if(localBasketItems && localTotalPrice){
      dispatch(setFromLocalStorage({localBasketItems:JSON.parse(localBasketItems),localTotalPrice:JSON.parse(localTotalPrice)}))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('localBasketItems',JSON.stringify(reduxItems))
    localStorage.setItem('localTotalPrice',JSON.stringify(totalPrice))
  })

  
  function getClientLocation(){
    if (typeof window !== "undefined") {
      if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition
      }
    }
  }

  return (
    <div className={'info-nav'}>
        <div className="container">
            <Link passHref href="/">
              <div className='info-nav__slogan'>
                <div className="info-nav__slogan__logo">
                  <i className="fa-solid fa-city"></i>
                </div>
                <div className="info-nav__slogan__title">
                    <div className='info-nav__slogan__title--one link-l-bold '>Electronic City</div>
                    <div className='info-nav__slogan__title--two link-s'>Electric equipment Store</div>
                </div>
              </div>
            </Link>
            <div className='info-nav__city'>
              <div className="info-nav__city__logo ">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-nav__city__title">
                <div className="info-nav__city__title--one link-s">Your city</div>
                <div className="info-nav__city__title--two link-s">{props.city || 'Not-Found'}</div>
              </div>
            </div>
            <div className='info-nav__phone'>
            <div className="info-nav__phone__logo">
              <i className="fa-solid fa-phone"></i>
              </div>
              <div className="info-nav__phone__title">
                <div className="info-nav__phone__title--one link-s">Mon-Sat from 8:00 to 20:00</div>
                <div className="info-nav__phone__title--two link-l-bold">(480) 555-0103</div>
              </div>
            </div>
            <Link passHref href="/basket">
              <div className='info-nav__basket'>
              <div className="info-nav__basket__logo">
                <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="info-nav__basket__title">
                  <div className="info-nav__basket__title--one link-l-bold">In basket</div>
                  <div className="info-nav__basket__title--two link-xs">{reduxItems.length} {reduxItems.length > 1 ? ' products' : ' product'} , {totalPrice}$</div>
                </div>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default InfoNav