import Htext from './Htext'

type Props = {}

const BoostYourLinks = (props: Props) => {
  return (
    <div className='text-center h-80 flex justify-center flex-col bg-primary-200 py-12 space-y-6 text-white sm:px-0 px-2' >
        <Htext>
            Boost your links today
        </Htext>
        <button className='bg-primary-100 rounded-full h-12 w-40 mx-auto px-22 text-white font-bold'>Get started </button>
    </div>
  )
}

export default BoostYourLinks