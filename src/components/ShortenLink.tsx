import axios, { AxiosResponse } from "axios"
import { FormEvent} from "react"

type Props = {  
  setShortenLink: React.Dispatch<React.SetStateAction<string >>;
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  shortenLink: string;
  input: string;
  setLinkTab: React.Dispatch<React.SetStateAction<string[]>>;
}

const ShortenLink:React.FC<Props> = ({  setLinkTab, shortenLink,setShortenLink, setFormSubmitted, input, setInput}) => {

const fetchData = async ():Promise<void> => {
    try {
      if (!input) {
        throw new Error("Veuillez fournir une URL à raccourcir.");
      }

   let response: AxiosResponse<any, any> = await axios.get(`https://is.gd/create.php?format=json&url=${input}`);
    setShortenLink(response.data.shorturl);

    let resultData= response.data;
    
      if (!resultData || !resultData.full_short_link) {
        throw new Error("Impossible de raccourcir l'URL. Veuillez réessayer plus tard.");
      }
      
    } catch (error:any) {
      alert("Une erreur est survenue : " + error.message);
    }
    
  };

  const sendForm = (e:FormEvent) =>{
    e.preventDefault();
    fetchData();
    setFormSubmitted(true)
  if (shortenLink) {
      setLinkTab((prevLinkTab:any) => [...prevLinkTab, { shortenLink, input }]);
    }
  }

 return (
<div>
  <div className="sm:px-0 sm:mx-20 mx-4 relative z-36">
    <div className='container relative  sm:mx-auto bg-primary-200 sm:bg-[url("/img/bg-shorten-desktop.svg")] bg-[url("/img/bg-shorten-mobile.svg")] bg-cover sm:h-56 h-36  px-8 rounded-xl mt-24'>
      <div className=''>
    <form onSubmit={sendForm} className='py-2 flex sm:justify-center sm:flex-row flex-col items-center sm:py-20 sm:space-x-3 space-y-2 w-full'>
  <input
    type="text"
    className='h-12 sm:w-4/6 w-full rounded-md flex items-center mt-2'
    placeholder='Shorten a link here...'
    onChange={e => setInput(e.target.value)}
  />
  <button  type="submit" className='bg-primary-100 cursor-pointer rounded-xl h-12 text-white font-bold sm:w-1/6 w-full m-0' id='submitLink'>
    Shorten It!
  </button>
</form>
      </div>
    </div>   
   </div>
</div>
  )
}

export default ShortenLink