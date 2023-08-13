import axios from "axios"
import { useState } from "react"





const ShortenLink = () => {
 
const [input, setInput] = useState<string>();
const [result, setResult] = useState<string>('');

  const fetchData = async () => {
    try {
      if (!input) {
        throw new Error("Veuillez fournir une URL à raccourcir.");
      }

      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`);
      const resultData = response.data.result;

      if (!resultData || !resultData.full_short_link) {
        throw new Error("Impossible de raccourcir l'URL. Veuillez réessayer plus tard.");
      }

      setResult(resultData.full_short_link);
    } catch (error:unknown) {
      alert("Une erreur est survenue : " + error.message);
    }
  };

const handleClick = (e) =>{
  e.preventDefault()
  fetchData()
  
}
 

 return (
   <div className="sm:px-0 mx-2 ">
    <div className='container relative z-20 sm:mx-auto bg-primary-200 sm:h-56 h-36  px-8 rounded-xl mt-24'>
      <div className=''>
    <form action="" method='' className='flex sm:justify-center sm:flex-row flex-col items-center sm:py-20 sm:space-x-3 space-y-2 w-full' onSubmit={handleClick} >
       <input type="text" name="" id="" className='h-12 sm:w-4/6 w-full rounded-md flex items-center mt-2 ' placeholder='Shorten a link here...'onChange={e => setInput(e.target.value)}/> 
       <input type="submit" value="Shorten It!" className='bg-primary-100 rounded-xl h-12 text-white font-bold sm:w-1/6 w-full m-0 ' id='submitLink' />
    </form>
      </div>
  <ul className="relative z-20  ">
     <li className="bg-white  h-20 px-8 rounded-md mt-6 flex items-center justify-between">
      <p>{input}</p>
    <div className='flex flex-row items-center space-x-2'>
        <p className="text-primary-100 font-bold">{result}</p>
        <button className="bg-primary-100 rounded-xl h-12 text-white font-bold w-20 m-0">Copy!</button>
      </div>
      
    </li>  
  </ul>
    </div>
    <div>
      
    
    
   
    </div>
   </div>
  )
}

export default ShortenLink