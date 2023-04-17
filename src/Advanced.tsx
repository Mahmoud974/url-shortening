import React, { useState } from 'react'
import Htext from './components/Htext'
import Cards from './components/Cards'
import { CardAdvanced } from './shared/type';
import StaticsImg from '@/assets/icon-brand-recognition.svg'
import DetailsRecords from '@/assets/icon-detailed-records.svg'
import Customizable from '@/assets/icon-fully-customizable.svg'

type Props = {}

const Advanced = (props: Props) => {
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
    <section className='bg-gray-200 h-[100vh]  -mt-20' >
        <div className='pt-40'>
            <Htext>
            Advanced Statics
            </Htext>
            <p className='mt-6 text-center w-1/3 mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea necessitatibus magni veniam, quis corrupti?
            </p>  
        </div>
        <div className='container mx-auto flex justify-center space-x-12 mt-24'>
          {
            cardData.map((card:CardAdvanced) =>

              <div className='flex ' key={card.id}>
                <Cards  cardkey={card.id} title={card.title} img={card.img} text={card.text} />

              </div>
            )
          }
        </div>


    </section>
  )
}
export default Advanced;