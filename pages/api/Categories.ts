// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { initializeApp } from 'firebase/app'
import { getFirestore,collection,getDocs } from 'firebase/firestore'
import { Data } from '../../Config/Types/ApiTypes'
import { firebaseConfig } from '../../Config/Firebase/FirebaseFunc'







export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  initializeApp(firebaseConfig)
  const db = getFirestore()
  const PHONES = collection(db,'Categories')
  let categoriesList:any = []
  await getDocs(PHONES)
    .then((snapShot) => {
      snapShot.docs.map(category => {
        let newData = {...category.data(),Id:category.id}
        categoriesList.push(newData)
      })
    })
  res.status(200).json(categoriesList)
}
