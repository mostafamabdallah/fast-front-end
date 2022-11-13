import React from 'react'
import image from 'next/image'

type Props = {}

function AboutUsMainDiv({}: Props) {
  return (
    <div className='py-40 flex flex-row justify-center items-center flex-wrap'>
        <div className='w-full md:w-1/2 px-44 '>
            <h2 className='font-secondary text-6xl mb-6'>من نحن</h2>
            <p className='font-primary text-2xl text-niceGray'>نحن شركة تساعدك على إنشاء موقع أو متـــــــــــــــــــــــــــجر الإلكتروني الخاص بك بكــــــــــــــــــــل سهولة بدون أي خبرة في مجال التصميم و البرمجة من خلال 4 خطوات فقط تمتلك فاست فريق متكامل من مصممين و مبرمجيــن ومسوقين لتعزيز وجودك على الانترنت بقوة لـــــــــــــــــدعم نجاح عمــــلك,نؤمن بأهمية مواكبة التطــــــــور التكنولوجي في مجال الأعمال و السعي لتبسيط وتوسيع هــذا المجال</p>
        </div>
        <div className='w-full md:w-1/2'>
            <image />
        </div>
    </div>
  )
}

export default AboutUsMainDiv