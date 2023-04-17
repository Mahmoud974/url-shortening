import HomeImage from '@/assets/illustration-working.svg'

import { useState } from 'react';

type Props = {}

const Home = (props: Props) => {
    
  return (
    <div className='container mx-auto mt-36'>
       <div className='flex justify-between items-center'>
         <div className='space-y-6'>
            <h2 className='text-7xl w-2/3 font-bold'>
            More than just shorter links
        </h2>
        <p className='w-2/3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum assumenda ut tempore itaque consequatur quia nisi ratione.
        </p>
        <button className='rounded-full text-white px-8 py-2 bg-primary-100 hover:bg-primary-200 font-bold'>Get started</button>
        </div>
        <div>
        <img src={HomeImage} alt="illustartion working" />
        </div>
       </div>


    </div>
  )
}

export default Home