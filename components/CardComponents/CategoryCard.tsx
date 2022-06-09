
import Image from 'next/image';
import { useRouter } from 'next/router';

type CategoryCardProps = {
  brand:string
  image:string
}



const CategoryCard = ({brand,image}:CategoryCardProps) => {
  const router = useRouter()
  return (
    <article onClick={() => router.push(`/catalog/${brand}`)} className='category-card'>
        <Image className='category-card__image' src={image} alt={image} width={240} height={240} objectFit='contain'  />
        <div className="category-card__title headline-xs">{brand}</div>
    </article>
  )
}

export default CategoryCard