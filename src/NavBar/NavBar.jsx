import {useState} from 'react'


export default function 
() {
  const [trus,setTrus] = useState(true)
  function handleTrus(){
    setTrus(false)
  }
  return (
    <div className='flex w-full py-16 justify-between items-center relative'>
        <div className="img">
            <img src='./logo.svg' alt='logo' />        
        </div>
        <ul className='sm:flex gap-6 text-lg cursor-pointer hidden'>
          <li className='cursor-pointer gray-500 hover:text-red-500'>
            Home
          </li>
          <li className='cursor-pointer gray-500 hover:text-red-500'>
            News
          </li>
          <li className='cursor-pointer gray-500 hover:text-red-500'>
            Popular
          </li>
          <li className='cursor-pointer gray-500 hover:text-red-500'>
            Trending
          </li>
          <li className='cursor-pointer gray-500 hover:text-red-500'>
            Categories
          </li>
        </ul>
        {
          trus && <img src="./icon-menu.svg" alt="close icon" className=' sm:hidden cursor-pointer' onClick={handleTrus} />
        }
        { !trus && <Toggled setTrus={setTrus} />}
    </div>
  )
}

function Toggled({setTrus}){

  function handleTrus(){
    setTrus(true)
  }
  

  return (
    <div className='h-screen absolute top-0 right-0 w-4/5 bg-white rounded-xl py-32 px-8 z-20'>
      <img className='absolute top-8 right-6 cursor-pointer' src="./icon-menu-close.svg" alt="" onClick={handleTrus} />
      <ul className='flex flex-col gap-8'>
        <li className='text-xl text-black cursor-pointer capitalize hover:text-red-500'>Home</li>
        <li className='text-xl text-black cursor-pointer capitalize hover:text-red-500'>New</li>
        <li className='text-xl text-black cursor-pointer capitalize hover:text-red-500'>Popular</li>
        <li className='text-xl text-black cursor-pointer capitalize hover:text-red-500'>Trending</li>
        <li className='text-xl text-black cursor-pointer capitalize hover:text-red-500'>Categories</li>
      </ul>



    </div>
  )
}