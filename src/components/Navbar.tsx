
import { useState } from 'react'
import Link from './Link'
import { SelectedPage } from '@/shared/type'

type Props = {
  isTopOfPage: boolean;
  setIsTopOfPage: (value: boolean) => void

}

const Navbar = ({isTopOfPage, setIsTopOfPage }: Props) => {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Features)

  return (
    <div className='flex container justify-between mx-auto mt-8 text-primary-200'>
      
      <div className='flex items-center'>
        <div className='flex  items-center space-x-4 '>
        <h1 className='font-poppins font-bold text-3xl'>Shortly</h1>
        <Link page="Features" />
         <Link page="Pricing" />
         <Link page="Ressources"/>
        
        </div>
      </div>

      <div className='flex space-x-4 items-center'>
        <ul className='flex space-x-4 items-center'>
          <li>Login</li>
          <li className='rounded-full text-white px-8 py-2 bg-primary-100 hover:bg-primary-200'>Sign up</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar