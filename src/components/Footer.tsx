import { AiFillFacebook } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-neutral-400 text-white sm:h-72 flex pt-16 items-center flex-col sm:flex-row text-center py-16 '>
         
        <div className='container mx-auto flex sm:justify-center sm:items-start flex-col sm:flex-row text-center space-y-8 p '>
             <div >
           
         </div>
         <div className='flex sm:flex-row flex-col sm:space-x-24 '>
           <h4 className='font-poppins font-bold text-3xl mt-6'>Shortly</h4>
         
            <ul className='sm:space-y-6 space-y-4 mt-6'>
                <li className='font-bold mb-6'>Features</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer'>Link Shortening</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer'>Branded Links</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer'>Analytics</li>
            </ul>
            <ul className='sm:space-y-6 space-y-4 mt-6'>
                <li className='font-bold mb-6' >Ressources</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer '>Blog</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer'>Developpers</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer'>Support</li>
            </ul>
            <ul className='sm:space-y-6 space-y-4 mt-6'>
                <li className='font-bold mb-6'>Company</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer'>About</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer'>Our Team</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer'>Careers</li>
                <li className='text-gray-300 hover:text-primary-100 cursor-pointer'>Contact</li>
            </ul>

             <ul className='flex space-x-6 justify-center mt-6'>
            <li className='text-4xl cursor-pointer hover:text-primary-100 '>
              <AiFillFacebook/>
            </li>
            <li className='text-4xl cursor-pointer hover:text-primary-100 '>
              <AiOutlineTwitter/>
            </li>
              <li className='text-4xl cursor-pointer hover:text-primary-100 '>
              <BsPinterest/>
            </li>
            <li className='text-4xl cursor-pointer hover:text-primary-100 '>
              <AiOutlineInstagram/>
            </li>
          </ul>
         </div>
      
        </div>

    </footer>
  )
}

export default Footer