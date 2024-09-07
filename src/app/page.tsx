'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import MorphLogo from './logo'

function App() {

  return (
    <>
     <div className='m-10'>
     <MorphLogo/>
     </div>
     <div className='flex justify-center items-center 
     h-screen text-center font-bold text-6xl text-[#14a800] 
     leading-none'>
      Start Building your next Dapp
     <br className='mt-5'/> On Morph🐨
     </div>
    </>
  )
}

export default App
