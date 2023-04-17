import React from 'react'

type Props = {
    children: string
}

const Htext = ({children}: Props) => {
  return (
    <h3 className='font-bold text-center text-4xl text-se'>
        {children}
    </h3>
  )
}

export default Htext