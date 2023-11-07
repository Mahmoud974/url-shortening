import React from 'react'

type Props = {
    children: string
}

const Htext = ({children}: Props) => {
  return (
    <h3 className='font-bold text-center sm:text-4xl text-3xl  relative'>
        {children}
    </h3>
  )
}

export default Htext