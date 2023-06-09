
import Navbar from './components/Navbar'
import Home from './Home';
import ShortenLink from './components/ShortenLink'
import Advanced from './Advanced'
import BoostYourLinks from './components/BoostYourLinks'
import Footer from './components/Footer'
import { SelectedPage } from './shared/type'
import { useState, useEffect } from 'react';

type Props = {}

const App = (props: Props) => {

const [isTopOfPage, setIsTopOfPage ] = useState<boolean>(true)

  useEffect(()=>{
    
  },[])
  return (
 <>
 <Navbar isTopOfPage={isTopOfPage} setIsTopOfPage={setIsTopOfPage} />
 <Home/>
 <ShortenLink/>
 <Advanced/>
 <BoostYourLinks/>
 <Footer/>
 </>

  )
}

export default App