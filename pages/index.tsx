import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import axios from  'axios';
import { ProductType } from '../Config/Types/ApiTypes';



import Slider from '../components/HomeComponents/Slider';
import Section from '../components/SectionComponents/Section';
import Card from '../components/CardComponents/Card';
import ProsSection from '../components/SectionComponents/ProsSection';
import NewsCard from '../components/CardComponents/NewsCard';



const Home:NextPage<{phones:Array<ProductType>}> = ({phones}) => {

  
  let myArr = phones.map(product => {
    return(
      <Card key={product.Id}>{product}</Card>
    )
  })
  let myNewsArr = [<NewsCard key='test1' />,<NewsCard key='test2' />,<NewsCard key='test3' />,<NewsCard key='test4' />,<NewsCard key='test5' />]

  return (
    <main>
      <Slider />
      <Section sectionName='Sale of goods'>{myArr}</Section>
      <Section sectionName='Popluar' isDarkBg={true} >{myArr}</Section>
      <ProsSection />
      <Section sectionName='Hits' isDarkBg={true} >{myArr}</Section>
      <Section sectionName='News'  gap={25} >{myNewsArr}</Section>
    </main>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = 'http://localhost:3000/'
  const getData = await axios.get( baseUrl + "api/Products")
  const Phones = await getData.data.filter((product:ProductType) => product.Type == 'Phone')
  return {
    props:{
      phones:Phones
    }
  }
}