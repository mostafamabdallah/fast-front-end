import React from "react";
import ServiceCard from "../components/ServiceCard";
import img1 from "../assets/imgs/Cloud hosting-pana.svg"
import img2 from "../assets/imgs/Design team-bro.svg"
import img3 from "../assets/imgs/Domain names-pana.svg"
import img4 from "../assets/imgs/Mobile UX-bro.svg"
import img5 from "../assets/imgs/Mobile-bro.svg"
import img6 from "../assets/imgs/Operating system-rafiki.svg"
import JoinUs from "../components/JoinUs";

const OurServices = () => {
  return <div className="flex flex-col justify-center items-center">
    {/* main div title*/}
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-secondary text-6xl text-niceGray my-5">قائمة خدماتنا</h1>
      <p className="font-primary text-2xl text-niceGray my-1">تحتل علاقتنا بعملائنا وقدرتنا على فهم إحتياجاتهم ومتطلباتهم والعمل على تلبيتها الأولوية</p>
      <p className="font-primary text-2xl text-niceGray my-1">القصوي لدينا و نؤمن بأن الشراكة المستدامة تعتمد على الشفافية</p>
    </div>
    <div className="grid grid-cols-3 gap-5 my-40 items-center justify-center mx-auto">
      <ServiceCard img={img1} serviceType='خدمة' serviceContent="الاستضافة السحابية"/>
      <ServiceCard img={img2} serviceType='خدمة' serviceContent="بناء المواقع الالكترونية"/>
      <ServiceCard img={img3} serviceType='خدمة' serviceContent="النطاق العالمي والمحلي"/>
      <ServiceCard img={img4} serviceType='خدمة' serviceContent="بناء التطبيقات الهواتف الذكية"/>
      <ServiceCard img={img5} serviceType='خدمة' serviceContent="بناء المتاجر الالكترونية"/>
      <ServiceCard img={img6} serviceType='خدمة' serviceContent="انمظمة تقنية"/>
      
    </div>

    <JoinUs />
  </div>;
};

export default OurServices;
