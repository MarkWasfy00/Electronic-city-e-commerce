import { useState } from 'react';
import { ProductType } from '../../Config/Types/ApiTypes';
import { Rating } from '@mui/material';
import { useAppDispatch } from '../../redux/Hooks/Hooks';
import { addItem } from '../../redux/Basket/Basket';
import { getDiscount } from '../../Config/GlobalFunctions/Functions';
import Image from 'next/image';



type ItemSectionProps = {
    children:ProductType
}






const ItemSection = ({children}:ItemSectionProps) => {
    const [imgChange,setImgChange] = useState(0);
    const [infoSwipe,setInfoSwipe] = useState('description');
    const dispatch = useAppDispatch();


    function getBrief(items:ProductType){
        let breifArray = [];
        let counter:number = 0
        for(let i in items.Brief){
            ++counter
            breifArray.push(
                <div key={items.Brief[i]} className={`brief-holder link-s${counter % 2 == 0 ? ' brief-dark':''}`}>
                    <div className="brief-key">{i}</div>
                    <div className="brief-value">{items.Brief[i]}</div>
                </div>
                )
        }
        return breifArray
        
    };
    

  return (
    <section className='item-section'>
        <div className="container">
            <div className="item-section__title headline-xs">{children.Title}</div>
            <div className="item-section__body">
                 <div className="item-section__body__view">
                     <div className="item-section__body__view__upper">
                         <div className="item-section__body__view__upper__left-image">
                             {
                                 children.Images.map((img,indx) => <Image onClick={() => setImgChange(indx)} width={70} height={50} className={`left-image ${imgChange == indx ? ' left-image-active':''}`} key={indx} alt={img} src={img} />)
                             }
                             
                         </div>
                         <div className="item-section__body__view__upper__main-image">
                             <Image className='main-image' src={children.Images[imgChange]} alt={children.Images[imgChange]} height={400} width={500} />
                         </div>
                     </div>
                     <div className="item-section__body__view__lower">
                         <div className="item-section__body__view__lower__price">
                             <div className="item-section__body__view__lower__price-cash">
                                <del className={`link-l-bold${children.Promotion ? '':' disactive'}`}>{children.Curr}{children.Price}</del>
                                <div className="link-l-bold">{children.Curr}{getDiscount(children.Promotion,children.Price).newPrice}</div>
                             </div>
                             <div className="link-id lower-price-id">PC-{children.Id.slice(0, 5)}</div>
                         </div>
                         <div className="item-section__body__view__lower__cta">
                             <button onClick={() => dispatch(addItem({item:children.Id,price:getDiscount(children.Promotion,children.Price).newPrice}))} className={`item-section__body__view__lower__cta__btn link-s${children.Stock <= 0 ? ' item-section__body__view__lower__cta__btn--disabled':''}`}>Add to cart</button>
                             <Rating name="read-only" value={children.Rate} readOnly />
                         </div>
                     </div>
                 </div>
                 <div className="item-section__body__brief">
                     <div className="item-section__body__brief__title">
                         <div className="headline-xs">Breifly about the product</div>
                         <div style={children.Stock > 0 ? {color:'green'}:{color:'red'}} className="link-s">{children.Stock > 0 ? 'In stock': 'Out of stock'}</div>
                     </div>
                     <div className="item-section__body__brief__body">
                        {getBrief(children)}
                     </div>
                 </div>
            </div>
            <div className="item-section__footer">
                <div className={`item-section__footer__titles${infoSwipe == 'review' ? ' titles-review':' titles-description'}`}>
                    <div onClick={() => setInfoSwipe('description')} className={`title-1 link-l${infoSwipe == 'description' ? ' title-active':''}`}>Description</div>
                    <div onClick={() => setInfoSwipe('review')} className={`title-2 link-l${infoSwipe == 'review' ? ' title-active':''}`}>Reviews(2)</div>
                </div>
                <div className="item-section__footer__body">
                    <div className={`item-section__footer__body__description link-s${infoSwipe == 'description' ? '':' disactive'}`}>{children.Description}</div>
                    <div className={`item-section__footer__body__reviews link-s${infoSwipe == 'review' ? '':' disactive'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum at ullam ea totam. Fuga earum ad inventore, blanditiis numquam iste. Cumque dicta atque odit corporis, facilis numquam quas voluptate.
                    Ex enim nemo ullam quia molestias? Magnam maxime, molestias nulla quaerat commodi deleniti quo pariatur. Maiores similique aut, libero culpa atque modi ea sit eveniet consequatur consequuntur? Velit, facilis reiciendis?
                    Adipisci omnis quia placeat voluptate excepturi error officiis neque dolore saepe dolor repudiandae, rerum earum sequi quas doloribus laudantium doloremque vitae eius est sed odit molestias. Vel corrupti vero voluptatem!
                    Atque eius dolor beatae necessitatibus. Repudiandae quam temporibus facere fuga architecto beatae animi, labore aliquid odit dolor ab autem accusamus, ad inventore laudantium iste qui. Earum, itaque? Voluptatem, cum voluptate.
                    Eligendi, eaque neque? Consectetur, alias aspernatur, corrupti iure voluptatibus repellendus velit iusto fugiat laboriosam, nam tenetur voluptates quas consequuntur. Excepturi velit deleniti non omnis porro ullam tenetur hic recusandae voluptas.</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ItemSection