import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import axios from  'axios';
import { ProductType } from '../Config/Types/ApiTypes';



import Slider from '../components/HomeComponents/Slider';
import Section from '../components/SectionComponents/Section';
import Card from '../components/CardComponents/Card';
import ProsSection from '../components/SectionComponents/ProsSection';
import NewsCard from '../components/CardComponents/NewsCard';


type HomeProps = {
  popluar: Array<ProductType>
  saleOfGoods:Array<ProductType>
  economy:Array<ProductType>
}


const Home:NextPage<HomeProps> = ({popluar,saleOfGoods,economy}) => {

  
  let phonesCards = popluar.map(product => {
    return(
      <Card key={product.Id}>{product}</Card>
    )
  });

  let saleOfGoodsCards = saleOfGoods.map(product => {
    return(
      <Card key={product.Id}>{product}</Card>
    )
  });

  let economyCards = economy.map(product => {
    return(
      <Card key={product.Id}>{product}</Card>
    )
  });




  let myNewsArr = [<NewsCard key='test1' />,<NewsCard key='test2' />,<NewsCard key='test3' />,<NewsCard key='test4' />,<NewsCard key='test5' />]

  return (
    <main>
      <Slider />
      <Section sectionName='Sale of goods'>{saleOfGoodsCards}</Section>
      <Section sectionName='Popluar' isDarkBg={true} >{phonesCards}</Section>
      <ProsSection />
      <Section sectionName='Economy' isDarkBg={true} >{economyCards}</Section>
      <Section sectionName='News'  gap={25} >{myNewsArr}</Section>
    </main>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async () => {
  const getData = await axios.get( process.env.HOST + "/api/Products");
  const popluar = await getData.data.filter((product:ProductType) => product.Rate > 3);
  const saleOfGoods = await getData.data.filter((product:ProductType) => product.Stock < 5);
  const economy = await getData.data.filter((product:ProductType) => product.Price < 9000);
  return {
    props:{
      popluar:popluar.slice(0,5),
      saleOfGoods:saleOfGoods.slice(0,5),
      economy:economy.slice(0,5)
    }
  }
}