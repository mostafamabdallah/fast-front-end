import React from 'react'

type Props = {
    mainTitle:string;
    subTitle:string;
}

function MainTitle({mainTitle,subTitle}: Props) {
  return (
    <div className='flex flex-col justify-center items-center bg-primary py-40'>
        <h1 className='font-secondary text-white text-6xl'>{mainTitle}</h1>
        <h1 className='font-secondary text-white text-xl mt-2'>{subTitle?subTitle:''}</h1>
    </div>
  )
}

export default MainTitle