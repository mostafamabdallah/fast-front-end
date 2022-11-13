import React from 'react'
import Image from 'next/image'
import img1 from '../assets/imgs/Business risk-pana.svg'

type Props = {}

function AboutUsMainDiv({}: Props) {
  return (
    <div className='py-40 flex flex-row justify-center items-center flex-wrap'>
        <div className='w-full md:w-1/2 px-5 md:px-20 lg:px-32  xl:px-44 '>
            <h2 className='font-secondary text-6xl mb-10'>من نحن</h2>
            <p className='font-primary text-2xl text-niceGray text-justify'>نحن شركة تساعدك على إنشاء موقع أو متـــــــــــــــــــــــــــجر الإلكتروني الخاص بك بكــــــــــــــــــــل سهولة بدون أي خبرة في مجال التصميم و البرمجة من خلال 4 خطوات فقط تمتلك فاست فريق متكامل من مصممين و مبرمجيــن ومسوقين لتعزيز وجودك على الانترنت بقوة لـــــــــــــــــدعم نجاح عمــــلك,نؤمن بأهمية مواكبة التطــــــــور التكنولوجي في مجال الأعمال و السعي لتبسيط وتوسيع هــذا المجال</p>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
            <Image src={img1}  alt='pic'/>
        </div>
    </div>
  )
}

export default AboutUsMainDiv