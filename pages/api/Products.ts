// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore,collection,getDocs } from '../../Config/Firebase/FirebaseFunc'
import { ApiProductId } from '../../Config/Types/ApiTypes'


type Data = ApiProductId[]



export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  const db = getFirestore()
  const Products = collection(db,'Products')
  await getDocs(Products)
    .then(snapShot => snapShot.docs.map((product) => ({...product.data(),Id:product.id}) ))
    .then((data) => res.status(200).json(data))
}
