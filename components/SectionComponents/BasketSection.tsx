import axios from 'axios';
import { useState } from 'react';
import BasketCard from '../CardComponents/BasketCard';
import { useUser } from '@auth0/nextjs-auth0';
import { ProductType } from '../../Config/Types/ApiTypes';
import { useAppSelector } from '../../redux/Hooks/Hooks';

 type BasketSectionProps = {
   children:ProductType[]
 }
 
 const BasketSection= ({children}:BasketSectionProps ) => {
   const [payment,setPayment] = useState('pay-by-card');
   const isPaymentChecked = (value:string):boolean => value === payment;
   const changePayment = (e:React.ChangeEvent<HTMLInputElement>) => setPayment(e.target.value);
   

   const reduxItems = useAppSelector((state) => state.basket.items);
   const totalPrice = useAppSelector((state) => state.basket.totalPrice);
   const {user,error,isLoading} = useUser();

    
    const checkoutSession = async () => {
        const sendData = await axios.post('/api/checkout',{
            items:reduxItems,
            email:user?.email
        })
        window.location = sendData.data.url
    }

    const basketCards = children.map(product => (
      <BasketCard key={product.Id}>{product}</BasketCard>
    ))

   return (
     <section className='basket-section'>
       <div className="container">
         <div className="basket-section__title headline-xs">Shopping Cart</div>
         <div className="basket-section__body">
           <div className="basket-section__body__cart">
             <div className="basket-section__body__cart__titles">
               <div className="link-s">Name</div>
               <div className="link-s">Quantity</div>
               <div className="link-s">Amount</div>
             </div>
             <div className="basket-section__body__cart__holder">
                {basketCards.length > 0 ? basketCards:<div className="basket-section__body__cart__holder__not-found link-l-bold" >The trash is empty,but you can always fix it</div>}
             </div>
           </div>
           <div className="basket-section__body__filter">
             <div className="basket-section__body__filter__title link-s">Order</div>
             <div className="basket-section__body__filter__payment-method">
              <div className="basket-section__body__filter__payment-method__title link-s">Payment method</div>
                <div className="basket-section__body__filter__payment-method__form link-s">
                  <div className="basket-section__body__filter__payment-method__form__option">
                    <input type="radio" readOnly value="pay-by-card" name="payment" checked={isPaymentChecked('pay-by-card')}  />
                    <label>Pay by card</label>
                  </div>
                  <div className="basket-section__body__filter__payment-method__form__option">
                    <input type="radio" readOnly value="pay-by-bank" name="payment" checked={isPaymentChecked('pay-by-bank')}/>
                    <label>Pay by bank</label>
                  </div>  
                </div>
                
             </div>
             <div className="basket-section__body__filter__price">
               <div className="basket-section__body__filter__price__title link-s">Total price</div>
               <div className="basket-section__body__filter__price__total headline-xs">{totalPrice}£</div>
             </div>
             <button className={`basket-section__body__filter__checkout link-s${user ? '':' checkout-disabled'}`} disabled={!user}  onClick={checkoutSession}>{user ? 'Check out':'Please login first'}</button>
           </div>
         </div>
       </div>
     </section>
   )
 }
 
 export default BasketSection

