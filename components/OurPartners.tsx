import React from 'react'

type Props = {}

function OurPartners({}: Props) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-secondary text-6xl text-niceGray my-4'>شركاؤنا</h1>
        <h2 className='font-primary text-2xl text-niceGray my-4'>شركاء ومستثمرين فاست الذين يثقون بنا</h2>
        <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
            <div className='border w-20 h-7 border-red-600'>img</div> 
            <div className='border w-20 h-7 border-red-600'>img</div> 
            <div className='border w-20 h-7 border-red-600'>img</div> 
            <div className='border w-20 h-7 border-red-600'>img</div> 
            <div className='border w-20 h-7 border-red-600'>img</div> 
        </div>
    </div>
  )
}

export default OurPartners