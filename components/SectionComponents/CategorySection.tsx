import React from 'react'



type CategorySectionProps = {
  children:React.ReactNode[]
  sectionTitle:string

}

const CategorySection = ({children,sectionTitle}:CategorySectionProps) => {
  
  return (
    <section className='category-section'>
      <div className="container">
        <div className="category-section__head">
          <div className="category-section__head__title headline-l">{sectionTitle}</div>
          {/* <div onClick={() => router.push(`/catalog/${sectionTitle}`)} className="category-section__head__link link-s">View all</div> */}
        </div>
        <div className="category-section__holder">
          {children}
        </div>
      </div>
    </section>
  )
}

export default CategorySection