import  Avatar  from './Avatar';
import Order from "./Order";
import Link from 'next/link';

import { OrderArray } from "../../Config/Types/OrderTypes";

//checked

type OrderHolderProps = {
    children:OrderArray
}

const OrderHolder = ({children}:OrderHolderProps) => {
  return (
    <section className='order-holder'>
        <Avatar/>
        <div className="container">
            <div className="order-holder__title headline-s">Orders</div>
            <div className="order-holder__container">
                {
                    children.length > 0 ? children.map(order => <Order key={order.id}>{order}</Order>)
                    :<div className="order-holder__container__no-items">
                        <i className="fa-solid fa-dolly"></i>
                        <div className="link-l">No orders yet</div>
                        <Link passHref href='/catalog'>
                            <button className='order-holder__container__no-items__btn link-s'>Make your first order</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    </section>
  )
}

export default OrderHolder