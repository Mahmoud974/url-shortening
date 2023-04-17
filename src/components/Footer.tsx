import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-neutral-300 text-white h-72 '>
         
        <div className='container mx-auto flex justify-between'>
             <div >
            <h4 className='font-poppins font-bold text-3xl'>Shortly</h4>
         </div>
         <div className='flex'>
            <ul className='space-y-2'>
                <li className='font-bold'>Features</li>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            <ul className='space-y-2'>
                <li className='font-bold'>Features</li>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            <ul className='space-y-2'>
                <li className='font-bold'>Features</li>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
         </div>
        </div>

    </footer>
  )
}

export default Footer