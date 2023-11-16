import Navbar from './components/Navbar'
import Home from './Home';
import ShortenLink from './components/ShortenLink'
import Advanced from './Advanced'
import BoostYourLinks from './components/BoostYourLinks'
import Footer from './components/Footer'
import { useState } from 'react';

const App = () => {

const [shortenLink, setShortenLink] = useState<string >('')
const [formSubmitted,setFormSubmitted] = useState<boolean>(false);
const [input, setInput] = useState<string >('');
const [linkTab, setLinkTab] = useState<string[]>([]);


  return (
 <div>
 <Navbar />
 <Home/>
 <ShortenLink  setLinkTab={setLinkTab} shortenLink={shortenLink} setShortenLink={setShortenLink} setFormSubmitted={setFormSubmitted} input={input} setInput={setInput}/>
 <Advanced linkTab={linkTab} input={input} shortenLink={shortenLink} formSubmitted={formSubmitted}/>
 <BoostYourLinks/>
 <Footer/>
 </div>

  )
}

export default App