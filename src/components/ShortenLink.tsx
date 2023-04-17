import axios from "axios"
import { log } from "console"
import { useEffect, useState } from "react"


type Props = {}

const ShortenLink = (props: Props) => {
  const [shortlink,setShortLink] = useState<string>('')
  const [newLink, setNewLink] = useState<string>('')
  useEffect(()=>{
 const submitLink = document.querySelector('form') as HTMLElement
    submitLink.addEventListener('submit', (e):void => {
      e.preventDefault()
      axios.get(`https://api.shrtco.de/v2/shorten?url=${shortlink}`).then(data => setNewLink(data.data.result.full_short_link))
   
    })
    
  },[shortlink])
     
 console.log('nouveau lien ' + newLink + ' ' + shortlink)
 console.log(typeof shortlink)
  return (
    <div className='container relative z-20 mx-auto bg-primary-200 h-56 rounded-xl mt-24'>
      <div className=''>
    <form action="" method='post' className='flex items-center justify-center py-20 space-x-3'>
       <input type="text" name="" id="" className='h-12 w-3/4 rounded-md' placeholder='Shorten a link here...' onInput={(e)=> setShortLink(e.currentTarget.value)}/> 
      <input type="submit" value="Shorten It!" className='bg-primary-100 rounded-xl h-12 px-8 text-white font-bold ' id='submitLink'/>
     
    </form>

      </div>

    </div>
  )
}

export default ShortenLink