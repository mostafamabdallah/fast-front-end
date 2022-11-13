import React from 'react'
import Image from 'next/image'
import img1 from '../assets/imgs/Mobile-bro (2).svg'
type Props = {}

function JoinUs({}: Props) {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='w-fit'>
            <h2 className='text-niceGray text-2xl font-primary'>نفتخر ان تكون جزء من عالمينا</h2>
            <h1 className='text-niceGray text-6xl font-secondary my-3'>انظم الى عملاءنا وشركاء النجاح</h1>
            <h2 className='text-niceGray text-2xl font-primary'>شركة فاست تقدم لكم خدمات تصميم المواقع و المتاجر الالكترونية</h2>
            <h2 className='text-niceGray text-2xl font-primary'>باحترافية وإبداع، بعد دراسة وتحليل احتياجاتكم بدقة لتنفيذ المشروع الخاص بكم</h2>
        </div>
        <Image src={img1} alt='mob'/>
    </div>
  )
}

export default JoinUs