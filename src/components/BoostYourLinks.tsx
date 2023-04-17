import React from 'react'
import Htext from './Htext'

type Props = {}

const BoostYourLinks = (props: Props) => {
  return (
    <div className='text-center h-34 bg-primary-200 py-12 space-y-6 text-white'>
        <Htext>
            Boost your links today
        </Htext>
        <button className='bg-primary-100 rounded-full h-12 px-8 text-white font-bold'>Get started </button>
    </div>
  )
}

export default BoostYourLinks