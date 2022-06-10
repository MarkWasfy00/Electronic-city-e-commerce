import React from 'react'
import type { NextPage } from 'next';
import { useAppSelector } from '../redux/Hooks/Hooks';
import { GetServerSideProps } from 'next';
import { ProductType } from '../Config/Types/ApiTypes';
import axios from 'axios';


import BasketSection from '../components/SectionComponents/BasketSection';
import { useRouter } from 'next/router';




const Basket:NextPage<{items:ProductType[]}> = ({items}) => {
  const reduxItems = useAppSelector((state) => state.basket.items)
  const basketItems = items.filter(product => reduxItems.find(obj => obj.id == product.Id))
  

  return (
    <main>
        <BasketSection>{basketItems}</BasketSection>
    </main>
  )
}

export default Basket

export const getServerSideProps: GetServerSideProps = async () => {
  const getData = await axios.get( process.env.HOST + "/api/Products")
  const items = await getData.data

  return {
    props:{
      items
    }
  }
}