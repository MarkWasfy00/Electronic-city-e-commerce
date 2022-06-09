import React from 'react'
import { ProductType } from '../../Config/Types/ApiTypes'
import Card from '../CardComponents/Card'


type FilterSectionProps = {
    children:Array<ProductType>
}



const FilterSection = ({children}:FilterSectionProps) => {

    const [slider,setSlider] = React.useState(50000)
    const [filterBrand,setFilterBrand] = React.useState('all')



    
    function getBrandsFromData(array:ProductType[]):string[]{
        let brands:string[] = []
        array.map(item => brands.includes(item.Brand) == true ? '':brands.push(item.Brand))
        return brands
    }
    
    function filterChecker(array:ProductType[]){
        const childrenFilter = array.filter(items => {
            if(items.Price <= slider && filterBrand == 'all'){
                return items
            } else if (items.Price <= slider && filterBrand == items.Brand){
                return items
            }
        })
        return childrenFilter
    }
    

  return (
    <section className='filter-section'>
        <div className="container">
            <div className="filter-section__head headline-l">{children[0].Category}</div>
            <div className="filter-section__body">
                <div className="filter-section__body__filter">
                    <div className="filter-section__body__filter--price">
                        <div className="title link-s">Price</div>
                        <input type="range" min="0" max="50000" step='1000' value={slider} onChange={(e) => setSlider(+e.target.value)} className="slider-track"/>
                        <div className="slider">
                            <div className="link-s">0£</div>
                            <div className="link-s">{slider}£</div>
                        </div>
                    </div>
                    <div className={`filter-section__body__filter--brand link-s`}>
                        <div className="brand-type">
                                <input onChange={(e) => setFilterBrand(e.target.value) } type="radio" value='all' name="brand" />
                                <div>All</div>
                            </div>
                            {
                                getBrandsFromData(children).map(brand => (
                                    <div key={brand} className="brand-type">
                                        <input onChange={(e) => setFilterBrand(e.target.value) } type="radio" value={brand} name="brand" />
                                        <div>{brand}</div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div className="filter-section__body__holder">
                    {
                        filterChecker(children).length > 0 
                        ? filterChecker(children).map(item => <Card key={item.Id}>{item}</Card>)
                        :<div className='filter-section__body__holder__no-items headline-xs'>No items Found</div>
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default FilterSection