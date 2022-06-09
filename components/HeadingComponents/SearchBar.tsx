import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ProductType } from "../../Config/Types/ApiTypes"

const SearchBar = () => {
    const router = useRouter()
    let [search , setSearch] = useState('')
    let [data,setData] = useState<ProductType[]>([])
    let filterData = data.filter(item =>  (item.Title.toUpperCase()).includes(search.toUpperCase()))
    
    useEffect(() => {
        let products = async () => {
            let res = await axios.get('/api/Products');
            setData(res.data)
        }
        products()
    },[])
    

  return (
    <div className='search-bar'>
        <div className='container'>
            <form className='search-bar__form' action="#">
                <div onClick={() => router.push('/catalog')} className='search-bar__form__catalog'>
                    <i className="fa-solid fa-boxes-stacked"></i>
                    <div className='search-bar__form__catalog--title link-s'>Product catalog</div>
                </div>
                <button className='search-bar__form__button link-s'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <div>Search</div>
                </button>
                <div className="search-bar__form__search">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className="search-bar__form__search__input link-s" placeholder="Site Search" type="text" />
                    <div className="search-bar__form__search__find">
                        {
                            data.length > 0 ? filterData.map(item => <div onClick={() => {router.push(`/catalog/${item.Category}/${item.Id}`);setSearch(item.Title)}} key={item.Id} className="search-bar__form__search__find__item link-s">{item.Title}</div>)
                            :<div  className="search-bar__form__search__find__item link-s">Not Found</div>
                        }
                        
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SearchBar


