// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { buffer } = require('micro');
import { getFirestore,collection,doc,setDoc,serverTimestamp } from '../../Config/Firebase/FirebaseFunc'

type Data = {
  name: string
}



const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const addOrder = async (session:any) => {
    const db = getFirestore()
    const userCollection = collection(db,'Users')
    await setDoc(doc(userCollection,`${session.metadata.email}`,`orders`,`${session.id}`), {
        amount: session.amount_total / 100,
        name:session.customer_details.name,
        timestamp:serverTimestamp(),
    });
}

export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  if(req.method === 'POST'){
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
        event = stripe.webhooks.constructEvent(payload,sig,endpointSecret)
    } catch(err) {
        return res.status(400)
    }

    if(event.type === 'checkout.session.completed'){
        const session = event.data.object
        return addOrder(session).then(() => res.status(200)).catch(err => res.status(400))
    }


  }
  
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver:true,
    }
}