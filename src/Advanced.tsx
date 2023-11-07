import Htext from './components/Htext'
import Cards from './components/Cards'
import { CardAdvanced } from './shared/type';
import StaticsImg from '@/assets/icon-brand-recognition.svg'
import DetailsRecords from '@/assets/icon-detailed-records.svg'
import Customizable from '@/assets/icon-fully-customizable.svg'



const Advanced = () => {
  const cardData:Array<CardAdvanced> =[
    {
      id:1,
      img: StaticsImg,
      title: "Brand Recognition",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsa, tenetur dolor sit est, nam animi ea, aut voluptate explicabo asperiores sed esse impedit voluptatem."
    },
      {
      id:2,
      img: DetailsRecords,
      title: "Detailed Record",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsa, tenetur dolor sit est, nam animi ea, aut voluptate explicabo asperiores sed esse impedit voluptatem."
    },
      {
      id:3,
      img: Customizable,
      title: "Fully Customizable",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsa, tenetur dolor sit est, nam animi ea, aut voluptate explicabo asperiores sed esse impedit voluptatem."
    },
  ]
  return (
    <section className='bg-gray-200 -mt-24 pb-36 ' >
      <ul className='pt-24 mx-20'>
      <li className="mt-6 bg-white  h-20 px-8 rounded-md flex items-center justify-between">
      <p></p>
    <div className='flex flex-row items-center space-x-2'>
        <p className="text-primary-100 font-bold"></p>
        <button className="bg-primary-100 rounded-xl h-12 text-white font-bold w-20 m-0">Copy!</button>
      </div>
</li> 


</ul>
        <div className=' pt-12  '>
            <Htext >
            Advanced Statics
            </Htext>
            <p className='mt-3 text-center sm:w-96 w-12/12 mx-auto text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni veniam.
            </p>  
          {/* <div className='bg-black h-[0.3rem] w-auto '></div> */}
        </div>
        <div className='container mx-auto flex justify-center sm:space-x-12 space-y-16 mt-24 flex-col sm:flex-row items-center sm:text-left text-center'>
          {
            cardData.map((card:CardAdvanced) =>
            <div className='flex' key={card.id}>
          <Cards cardkey={card.id} title={card.title} img={card.img} text={card.text} />
        </div>
            )
          }
        </div>


    </section>
  )
}
export default Advanced;