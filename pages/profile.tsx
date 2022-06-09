import { getSession } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { getFirestore,collection,getDocs,orderBy,query } from '../Config/Firebase/FirebaseFunc'
import type { NextPage } from 'next';
import OrderHolder from '../components/ProfileComponents/OrderHolder';


type ProfileProps = {
    data:any
}



const Profile:NextPage<ProfileProps> = ({data}) => {
  return (
    <main>
        <OrderHolder>{JSON.parse(data)}</OrderHolder>
    </main>
  )
}

export default Profile

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({req,res}) {
    const session = getSession(req,res)
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


    // 

    const db = getFirestore()
    const Orders = query(collection(db,'Users',`${session?.user.email}`,`orders`),orderBy('timestamp','desc'))
    const allOrders = await getDocs(Orders)
      .then(snapShot => Promise.all(snapShot.docs.map(async (order) => ({...order.data(),id:order.id,items:(await stripe.checkout.sessions.listLineItems(order.id,{limit:100})).data}))))
      

    return {
      props:{
        data:JSON.stringify(allOrders)
      }
    }
  }
})
