import { AiFillFacebook } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  const icons = [
    { icon: <AiFillFacebook />, link: 'https://www.facebook.com' },
    { icon: <AiOutlineTwitter />, link: 'https://www.twitter.com' },
    { icon: <BsPinterest />, link: 'https://www.pinterest.com' },
    { icon: <AiOutlineInstagram />, link: 'https://www.instagram.com' },
  ];

  const lists = [
    {
      title: 'Features',
      items: ['Link Shortening', 'Branded Links', 'Analytics'],
    },
    {
      title: 'Resources',
      items: ['Blog', 'Developers', 'Support'],
    },
    {
      title: 'Company',
      items: ['About', 'Our Team', 'Careers', 'Contact'],
    },
  ];

  return (
    <footer className='bg-neutral-400 text-white sm:h-72 flex pt-16 items-center flex-col sm:flex-row text-center py-16 '>
      <div className='container mx-auto flex sm:justify-center sm:items-start flex-col sm:flex-row text-center space-y-8 p '>
        <div>
      
        </div>
        <div className='flex sm:flex-row flex-col sm:space-x-20 '>
          <h4 className='font-poppins font-bold text-3xl mt-6'>Shortly</h4>

          {lists.map((list, index) => (
            <ul key={index} className='sm:space-y-6 space-y-4 mt-6'>
              <li className='font-bold mb-6'>{list.title}</li>
              {list.items.map((item, itemIndex) => (
                <li key={itemIndex} className='text-gray-300 hover:text-primary-100 cursor-pointer'>
                  {item}
                </li>
              ))}
            </ul>
          ))}

          <ul className='flex xl:space-x-6 space-x-4 sm:flex-wrap justify-center mt-6 sm:mx-4'>
            {icons.map(({ icon, link }, index) => (
              <li key={index} className='text-4xl cursor-pointer hover:text-primary-100 '>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;