import React from 'react'
import { NextPage } from 'next'


type Props = {
    data:string
    
}

const Testing:NextPage<Props> = ({data}) => {
    
  return (
    <>
        <div className='headline-xs'>{data}</div>
        <button  >Register</button>
        
    </>
  )
}

export default Testing

export const getServerSideProps = async () => {
    const data = "HIGH VALUE INFORMATION DONT LEAK IT";
    return{
        props:{
            data,
        }
    }
}