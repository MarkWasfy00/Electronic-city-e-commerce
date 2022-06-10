import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductType } from "../../Config/Types/ApiTypes";

// checked

const SearchBar = () => {
    const router = useRouter();
    let [search , setSearch] = useState<string>('');
    let [data,setData] = useState<ProductType[]>([]);
    let filterSearch = data.filter(item => search ? (item.Title.toUpperCase()).includes(search.toUpperCase()):false )
    
    
    useEffect(() => {
        let products = async () => {
            let res = await axios.get('/api/Products');
            setData(res.data)
        };
        products();
    },[]);
    

  return (
    <div className='search-bar'>
        <div className='container'>
            <form className='search-bar__form' action="#">
                <div className='search-bar__form__catalog' onClick={() => router.push('/catalog')}>
                    <i className="fa-solid fa-boxes-stacked"></i>
                    <div className='search-bar__form__catalog__title link-s'>Product catalog</div>
                </div>
                <button className='search-bar__form__button link-s'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <div>Search</div>
                </button>
                <div className="search-bar__form__search">
                    <input className="search-bar__form__search__input link-s" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Site Search" type="text" />
                    <div className="search-bar__form__search__find">
                        {
                            filterSearch.map(item => (
                                <div className="search-bar__form__search__find__item link-s" onClick={() => {router.push(`/catalog/${item.Category}/${item.Id}`);setSearch(item.Title)}} key={item.Id}>
                                    <div className="search-bar__form__search__find__item__text">{item.Title}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SearchBar


