import HomeImage from '/img/illustration-working.svg'

const Home = () => {
   
  return (
    <div className='container mx-auto sm:mt-36 mt-16 justify-center sm:px-0 px-2'>
       <div className='flex  sm:items-center  sm:flex-row flex-col-reverse text-center sm:text-left'>
         <div className='space-y-6 sm:ml-16 '>
            <h2 className='sm:text-7xl text-5xl mt-12 md:w-42 font-bold sm:text-left text-center'>
            More than just shorter links
        </h2>
        <p className='sm:w-2/3 text-center sm:text-left w-12/12 sm:mx-0 mx-auto '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum assumenda ut tempore itaque consequatur quia nisi ratione.
        </p>
        <button className='rounded-full text-white px-8 py-2 bg-primary-100 hover:bg-primary-200 font-bold'>Get started</button>
        </div>
        <div className=' sm:mt-0 mt-12 relative '>
        <img src={HomeImage} alt="illustartion working" className='' />
        </div>
       </div>
    </div>
  )
}

export default Home