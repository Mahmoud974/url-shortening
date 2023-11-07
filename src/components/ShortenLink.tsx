import axios from "axios"
import { useState } from "react"


const ShortenLink = () => {
 
const [input, setInput] = useState<string>();
const [result, setResult] = useState<string>('');

  const fetchData = async ():Promise<void> => {
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

const handleClick = (e:Event) =>{
  e.preventDefault()
  fetchData()
  
}
 

 return (
<div>

   <div className="sm:px-0 mx-20 relative z-36">
    <div className='container relative  sm:mx-auto bg-primary-200 bg-[url("/img/bg-shorten-desktop.svg")] bg-cover sm:h-56 h-36  px-8 rounded-xl mt-24'>
      <div className=''>
    <form action="" method='' className='flex sm:justify-center sm:flex-row flex-col items-center sm:py-20 sm:space-x-3 space-y-2 w-full' onSubmit={handleClick} >
       <input type="text" name="" id="" className='h-12 sm:w-4/6 w-full rounded-md flex items-center mt-2 ' placeholder='Shorten a link here...'onChange={e => setInput(e.target.value)}/> 
       <input type="submit" value="Shorten It!" className='bg-primary-100 cursor-pointer rounded-xl h-12 text-white font-bold sm:w-1/6 w-full m-0 ' id='submitLink' />
    </form>
      </div>
    </div>   
   </div>
 
</div>
  )
}

export default ShortenLink