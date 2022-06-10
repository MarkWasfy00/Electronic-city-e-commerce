import React from 'react'
import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import { ProductType } from '../../../Config/Types/ApiTypes';
import axios from 'axios';
import ItemSection from '../../../components/SectionComponents/ItemSection';
import { useRouter } from 'next/router';


const ProductId:NextPage<{item:ProductType}> = ({item}) => {
  
  return (
    <main>
      <ItemSection>{item}</ItemSection>
    </main>
  )
}

export default ProductId


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { categoryid,productid } = context.query
    const baseUrl = 'http://localhost:3000/'
    const getData = await axios.get( baseUrl + "api/Products")
    const item = await getData.data.find((product:ProductType) => product.Id == productid && product.Category == categoryid )
    if(item){
      return {
        props:{
          item
        }
      }
    } else {
      return {notFound:true}
    }
}


