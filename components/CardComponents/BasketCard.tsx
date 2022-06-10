import Image from 'next/image';
//-----------
import { ProductType } from '../../Config/Types/ApiTypes';
import { decreaseQuantity, increaseQuantity, removeItem } from '../../redux/Basket/Basket';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks/Hooks';
import { getDiscount } from '../../Config/GlobalFunctions/Functions';

//checked

type BasketCard = {
    children:ProductType
}




const BasketCard = ({children}:BasketCard) => {
    const reduxItems = useAppSelector((state) => state.basket.items.find(itm => itm.id  == children.Id)!);
    const dispatch = useAppDispatch();

  return (
    <article className='basket-card'>
        <div className="basket-card__remove">
            <i className="fa-solid fa-x" onClick={() => dispatch(removeItem({item:children.Id,price:getDiscount(children.Promotion,children.Price).newPrice}))}></i>
        </div>
        <div className="basket-card__holder">
            <div className="basket-card__holder__image">
                <Image alt={children.Title}  src={children.Images[0]} width={150} height={100} />
            </div>
            <div className="basket-card__holder__title">
                <div className="basket-card__holder__title__name link-l-bold ">{children.Title}</div>
                <div className="basket-card__holder__title__id link-id">PC-{children.Id.slice(0, 5)}</div>
            </div>
            <div className="basket-card__holder__counter headline-xs">
                <div className="basket-card__holder__counter__subtract" onClick={() => dispatch(decreaseQuantity({item:children.Id,price:getDiscount(children.Promotion,children.Price).newPrice}))}>-</div>
                <div className="basket-card__holder__counter__count">{reduxItems?.quantity}</div>
                <div className="basket-card__holder__counter__add" onClick={() => dispatch(increaseQuantity({item:children.Id,price:getDiscount(children.Promotion,children.Price).newPrice,stock:children.Stock}))}>+</div>
            </div>
            <div className="basket-card__holder__price link-l-bold">{reduxItems?.price * reduxItems?.quantity}{children.Curr}</div>
        </div>
    </article>
  )
}

export default BasketCard