import React from 'react'
import { CardAdvanced } from '../shared/type';


type Props = {
  cardkey?: number,
title: string,
img: string,
text: string
}

const Cards = ({cardkey,title, img, text}: Props) => {
  return (
<div >
  <div className='rounded-full bg-primary-200 h-24 w-24 absolute -mt-14  ml-8'>
<img src={img} alt="" className='flex items-center justify-center mx-auto mt-4 w-12'/>
  </div>
      <div className='bg-white h-64 w-80 rounded-xl '>
      <div className='pt-16 p-4'>
        <h4 className='font-bold text-2xl '>{title}</h4>
      <p className='text-gray-500'>
      
{text}
      </p>
      </div>

    </div>
</div>
  )
}

export default Cards