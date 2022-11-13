import React from 'react'
import Image from 'next/image'
type Props = {
    img:string
    serviceType:string
    serviceContent:string
}

function ServiceCard({img,serviceType,serviceContent}: Props) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Image src={img} alt='' className=' w-3/4'/>
        <h2 className='text-niceGray font-primary'>{serviceType}</h2>
        <h2 className='text-niceGray font-primary'>{serviceContent}</h2>
    </div>
  )
}

export default ServiceCard