import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/imgs/logo.png";

const date =new Date()

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#171717]  items-center">
      <div className="flex flex-row  flex-wrap p-10 lg:p-28" >
        <div className="w-11/12 md:w-[20%] flex-col flex">
          <Image src={logo} alt="fast" width="180"></Image>
          <p className="text-[#BFBFBF] mt-8 text-lg text-justify">
            هدفنا الرئيسي هو توفير الوقت لبناء مشروعك من خلال اطلاق موقعك او
            متجرك الالكتروني بأفضل وانسب الاسعار مع فاست
          </p>
          <div className="flex flex-row flex-wrap justify-start text-white mt-10">
            <Link href="#" className="text-5xl flex items-center text-inherit">
              <FontAwesomeIcon
                className={`pl-3 w-10`}
                icon={faFacebook}
              ></FontAwesomeIcon>
            </Link>
            <Link href="#" className="text-5xl flex items-center text-inherit">
              <FontAwesomeIcon
                className={`pl-3 w-10`}
                icon={faInstagram}
              ></FontAwesomeIcon>
            </Link>
            <Link href="#" className="text-5xl flex items-center text-inherit">
              <FontAwesomeIcon
                className={`pl-3 w-10`}
                icon={faYoutube}
              ></FontAwesomeIcon>
            </Link>
            <Link href="#" className="text-5xl flex items-center text-inherit">
              <FontAwesomeIcon
                className={`pl-3 w-10`}
                icon={faTwitter}
              ></FontAwesomeIcon>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-fit flex-col flex px-0 md:px-8">
          <h3 className="font-secondary text-white text-xl ">منصة فاست</h3>
          <ul className="flex flex-col mt-5">
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">من نحن</Link>
            </li>
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">الخدمات التي نقدمها</Link>
            </li>
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">تسويق بالعملة</Link>
            </li>
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">الاسعار</Link>
            </li>
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">المدونة</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-fit flex-col flex px-0 md:px-8">
          <h3 className="font-secondary text-white text-xl ">
            الدعم والمساعدة
          </h3>
          <ul className="flex flex-col mt-5">
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">الاسئله الشائعه</Link>
            </li>
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">سياسة الخصوصية</Link>
            </li>
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">الشروط والاحكام</Link>
            </li>
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">مركز المساعدة</Link>
            </li>
            <li className="text-[#BFBFBF] text-lg">
              <Link href="/">المدونة</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-fit flex-col flex px-0 md:px-8">
          <h3 className="font-secondary text-white text-xl ">
            معلومات التواصل
          </h3>
          <ul className="flex flex-col mt-5">
            <li className="text-[#BFBFBF] text-lg ">
              <Link href="/" className="flex ">
                <FontAwesomeIcon
                  className="w-5 ml-2"
                  icon={faMapLocation}
                ></FontAwesomeIcon>
                العراق- بغداد
              </Link>
            </li>
            <li className="text-[#BFBFBF] text-lg ">
              <Link href="/" className="flex ">
                <FontAwesomeIcon
                  className="w-5 ml-2"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
                البريد الالكتروني info@fast-tech.co
              </Link>
            </li>
            <li className="text-[#BFBFBF] text-lg ">
              <Link href="/" className="flex ">
                <FontAwesomeIcon
                  className="w-5 ml-2"
                  icon={faPhone}
                ></FontAwesomeIcon>
                رقم الهاتف + (964) 771 359 7962
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-fit flex flex-col">
          <h3 className="font-secondary text-white text-2xl ">
            الاشتراك في النشرة البريدية
          </h3>
          <div className="relative w-full flex mt-5">
            <button
              type="submit"
              className="p-2.5 text-sm w-fit font-medium text-white bg-primary rounded-r-lg border border-primary hover:bg-green-200 ml-2 "
            >
              اشترك الان
            </button>
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 flex-1 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 "
              placeholder="ادخل البريد الالكتروني"
              required
            />
          </div>
          <p className="text-[#BFBFBF] mt-5 text-sm">
            نحن لا نرسل البريد العشوائي
          </p>
        </div>
      </div>
      <hr className="bg-gray-300 w-10/12 h-[1px]" />
      <p className="text-center mt-10 text-[#BFBFBF]  pb-10">جميع الحقوق محفوظة لدى شركة فاست {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
