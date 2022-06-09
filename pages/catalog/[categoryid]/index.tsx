import React from 'react'
import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import { ProductType } from '../../../Config/Types/ApiTypes';
import axios from 'axios';


import FilterSection from '../../../components/SectionComponents/FilterSection';


const Categoryid:NextPage<{items:Array<ProductType>}> = ({items}) => {
  return (
    <main>
      <FilterSection>{items}</FilterSection>
    </main>
  )
}

export default Categoryid


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { categoryid } = context.query
    const baseUrl = 'http://localhost:3000/'
    const getData = await axios.get( baseUrl + "api/Products")
    const items = await getData.data.filter((product:ProductType) => product.Category == categoryid)
    if(items.length > 0){
      return {
        props:{
          items
        }
      }
    } else {
      return {notFound:true}
    }
    
}