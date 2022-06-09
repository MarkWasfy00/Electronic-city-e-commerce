import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { CategoriesType } from '../../Config/Types/ApiTypes';
import axios from 'axios';


import CategoryCard from '../../components/CardComponents/CategoryCard';
import CategorySection from '../../components/SectionComponents/CategorySection';
import ProsSection from '../../components/SectionComponents/ProsSection';



const catalog:NextPage<{categories:Array<CategoriesType>}> = ({categories}) => {
  
  const allCategories = categories.map(category => (
    <CategoryCard key={category.Id} image={category.Image} brand={category.Category}  />
  ))

  return (
    <main>
      <CategorySection sectionTitle={'Categories'}>
        {allCategories}
      </CategorySection>
      <ProsSection />
    </main>
  )
}

export default catalog

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = 'http://localhost:3000/'
  const getData = await axios.get( baseUrl + "api/Categories")
  const categories = await getData.data
  return {
    props:{
      categories
    }
  }
}