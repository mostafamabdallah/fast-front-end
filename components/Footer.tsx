import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../assets/imgs/logo.png'

const Footer = () => {
  return (
    <footer className="flex flex-row bg-black p-28">
      <div className="w-full md:w-3/12 flex-col flex">
        <Image src={logo} alt='fast' width='180'></Image>
        <p className="text-[#BFBFBF] mt-8">
          هدفنا الرئيسي هو توفير الوقت لبناء مشروعك من خلال اطلاق موقعك او متجرك
          الالكتروني بأفضل وانسب الاسعار مع فاست
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
    </footer>
  );
};

export default Footer;
