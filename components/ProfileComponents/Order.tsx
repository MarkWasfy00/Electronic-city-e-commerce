import { OrderItem } from "../../Config/Types/OrderTypes";
import { fromUnixTime,formatDistanceToNow  } from 'date-fns';


//checked


type OrderProps = {
    children:OrderItem
}


const Order = ({children}:OrderProps) => {
  return (
    <div className="order">
        <div className="order__info">
            <div className="link-id">{children.id.slice(0,15)}</div>
            <div className="link-s">{formatDistanceToNow(fromUnixTime(children.timestamp.seconds),{ addSuffix: true })}</div>
        </div>
        <div className="order__name link-l">OrderBy:{children.name}</div>
        {
            children.items.map(item => (
                <div key={item.id} className="order__type">
                    <div className="order__type__name link-s">{item.description}</div>
                    <div className="order__type__info">
                        <div className="link-id">Price:{item.amount_total / 100}$</div>
                        <div className="link-id">Quantity:{item.quantity}</div>
                    </div>
                </div>
            ))
        }
        <div className="order__total link-s">Total:{children.amount}$</div>
    </div>
  )
}

export default Order