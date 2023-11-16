import Htext from '@/components/Htext'
import Cards from '@/components/Cards'
import { CardAdvanced } from './shared/type';
import StaticsImg from '/img/icon-brand-recognition.svg'
import DetailsRecords from '/img/icon-detailed-records.svg'
import Customizable from '/img/icon-fully-customizable.svg'
import { useState } from 'react';


type Props = {  
  shortenLink: string;
  formSubmitted:boolean;
  input: string;
  linkTab: string[];
}

const Advanced:React.FC<Props> = ({linkTab, shortenLink, formSubmitted}) => {

  const [copieReussie, setCopieReussie] = useState<boolean>(false);

  const copierDansPressePapiers = ():void => {
    navigator.clipboard.writeText(shortenLink)
      .then(() => {
        setCopieReussie(true);
      })
      .catch((err:unknown) => {
        console.error("Erreur lors de la copie dans le presse-papiers : ", err);
      });
  };

  const cardData:Array<CardAdvanced> =[
    {
      id:1,
      img: StaticsImg,
      title: "Brand Recognition",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsa, tenetur dolor sit est, nam animi ea, aut voluptate explicabo asperiores sed esse impedit voluptatem.",
      cardClass: 'md:mt-4  my-4'
    },
      {
      id:2,
      img: DetailsRecords,
      title: "Detailed Record",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsa, tenetur dolor sit est, nam animi ea, aut voluptate explicabo asperiores sed esse impedit voluptatem.",
      cardClass: 'md:mt-6 my-4'
    },
      {
      id:3,
      img: Customizable,
      title: "Fully Customizable",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsa, tenetur dolor sit est, nam animi ea, aut voluptate explicabo asperiores sed esse impedit voluptatem.",
      cardClass: 'md:mt-24 my-4'
    },
  ]
  return (
    <section className='bg-gray-200 -mt-24 pb-36  ' >
      <ul className='pt-24 sm:mx-20 mx-4'>
        {
          formSubmitted && {linkTab}.linkTab.map((item:any, index:number) => <li key={index} className="mt-6 bg-white flex-wrap  md:h-20 h-auto px-8 rounded-md flex items-center justify-between">
      <p>{item.input}</p>
      <div className='h-2 bg-slate-200'></div>
    <div className='flex md:flex-row flex-wrap items-center space-x-2'>
        <p className="text-primary-100 font-bold">{item.shortenLink}</p>
        <button className="bg-primary-100 rounded-xl h-12 text-white font-bold md:w-20 my-2 md:my-0 w-full m-0 hover:bg-primary-200" onClick={copierDansPressePapiers}>Copy!</button>
      </div>
      </li>
      )}
      </ul>
        <div className='pt-12'>
            <Htext>
            Advanced Statics
            </Htext>
            <p className='mt-3 text-center sm:w-96 w-12/12 mx-auto text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni veniam.
            </p>  
        
        </div>
        <div className='container sm:mx-auto flex sm:flex-wrap justify-center sm:space-x-12 space-y-16 md:mt-4 mt-24  flex-col sm:flex-row items-center sm:text-left text-center'>
          {
            cardData.map((card:CardAdvanced) =>
            <div className='flex ' key={card.id}>
          <Cards cardkey={card.id} title={card.title} img={card.img} text={card.text} cardClass={card.cardClass} />
        </div>
            )
          }
        </div>


    </section>
  )
}
export default Advanced;