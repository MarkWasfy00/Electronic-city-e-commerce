import { fromUnixTime,formatDistanceToNowStrict, isValid, isPast } from 'date-fns'


export function getDiscount(num:number|null,totalPrice:number){
    const promotion = num && num < 10 ? parseFloat(`0.0${num}`) : num && num > 10 ?  parseFloat(`0.${num}`) : 0 ;
    const price = totalPrice;
    const discount = price * promotion;
    const newPrice = Math.floor(price - discount);
    return {
      discount,
      newPrice
    }
}



export function getDateOfItem(timeStamp:number){
    const result = fromUnixTime(timeStamp)
    if(isValid(result) && isPast(result)){
      const diff = formatDistanceToNowStrict(
      result,
      {unit:'day'}
    )
      const daysBetween = +diff.replace('days','')
      return daysBetween > 7 ? false : true
    } else {
      return false
    }
    
}