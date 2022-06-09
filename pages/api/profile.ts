import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next'



type Data = {[key: string]: any} | undefined


export default withApiAuthRequired(async function handler(req: NextApiRequest,res: NextApiResponse<Data>){
    const userObj = getSession(req,res)
    if(userObj){
        res.json(userObj.user);
    }
})