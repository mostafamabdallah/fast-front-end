import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/vercel.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faHome,
  faMarker,
  faPhone,
  faMoneyBill,faHand
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { faAdversal } from "@fortawesome/free-brands-svg-icons";

const Topnav = () => {
  const [animate, setAnimate] = useState({
    opacity: 0,
    display: "none",
    x: 1000,
  });
  return (
    <>
      <nav className="container md:flex flex-row flex-wrap items-center py-5  hidden">
        <div className="w-8/12 flex flex-row items-center ">
          <div className="logo w-fit ">
            <Image src={logo} width="100" alt="fast"></Image>
          </div>
          <ul className="flex w-full ml-3">
            <Link href="/">
              <li className="px-5 py-3 font-bold text-primary">الرئيسية</li>
            </Link>
            <Link href="/">
              <li className="px-5 py-3 font-bold">من نحن </li>
            </Link>

            <Link href="/">
              <li className="px-5 py-3 font-bold">الاسعار</li>
            </Link>

            <Link href="/">
              <li className="px-5 py-3 font-bold">خدماتنا</li>
            </Link>

            <Link href="/">
              <li className="px-5 py-3 font-bold">اتصل بنا</li>
            </Link>
          </ul>
        </div>
        <div className="w-4/12 flex flex-row justify-end items-center">
          <div className="flex w-fit ">
            <Link
              href="/about"
              className="px-8 py-2 border-2 border-niceGray rounded-full ml-5 font-primary font-bold text-sm"
            >
              تجربه مجانيه
            </Link>
          </div>
          <div className="flex w-fit ">
            <Link
              href="/about"
              className="px-8 py-2 border-2 border-niceGray text-white rounded-full bg-niceGray"
            >
              تجربه مجانيه
            </Link>
          </div>
        </div>
      </nav>
      <nav className="md:hidden z-10">
        <div
          className="container mx-auto flex flex-row items-center justify-start fixed"
          style={{ zIndex: 999 }}
        >
          <button
            className="w-[40px]  m-5"
            onClick={() => {
              setAnimate({ opacity: 1, display: "flex", x: 0 });
            }}
          >
            <FontAwesomeIcon
              className="text-4xl cursor-pointer text-secondary"
              icon={faBars}
            ></FontAwesomeIcon>
          </button>
        </div>
        <motion.div
          style={{ zIndex: 999 }}
          initial={{ display: "none", x: 1000 }}
          animate={animate}
          transition={{
            duration: 1,
          }}
          className="bg-primary w-screen h-screen flex flex-col justify-center items-center fixed"
        >
          <button
            onClick={() => {
              setAnimate({ opacity: 0, display: "flex", x: 1000 });
            }}
            className="absolute top-0 right-0 cursor-pointer text-white w-[40px]  m-5 z-50"
          >
            <FontAwesomeIcon
              className="pl-3 text-5xl w-[40px]"
              icon={faClose}
            ></FontAwesomeIcon>
          </button>
          <div className="container mx-auto">
            <div className="flex flex-row items-center justify-center">
              <FontAwesomeIcon
                className="pl-3 text-3xl w-[50px]"
                icon={faHome}
              ></FontAwesomeIcon>
              <Link
                onClick={() => {
                  setAnimate({ opacity: 0, display: "flex", x: 1000 });
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                href="/"
                className="text-3xl"
              >
                الرئيسية{" "}
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center mt-5">
              <FontAwesomeIcon
                className="pl-3 text-3xl w-[50px]"
                icon={faMarker}
              ></FontAwesomeIcon>
              <Link
                onClick={() => {
                  setAnimate({ opacity: 0, display: "flex", x: 1000 });
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                href="/"
                className="text-3xl"
              >
                عنا{" "}
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center mt-5">
              <FontAwesomeIcon
                className="pl-3 text-3xl w-[50px]"
                icon={faPhone}
              ></FontAwesomeIcon>
              <Link
                onClick={() => {
                  setAnimate({ opacity: 0, display: "flex", x: 1000 });
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                href="/"
                className="text-3xl"
              >
                تواصل معنا{" "}
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center mt-5">
              <FontAwesomeIcon
                className="pl-3 text-3xl w-[50px]"
                icon={faMoneyBill}
              ></FontAwesomeIcon>
              <Link
                onClick={() => {
                  setAnimate({ opacity: 0, display: "flex", x: 1000 });
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                href="/"
                className="text-3xl"
              >
               الاسعار {" "}
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center mt-5">
              <FontAwesomeIcon
                className="pl-3 text-3xl w-[50px]"
                icon={faHand}
              ></FontAwesomeIcon>
              <Link
                onClick={() => {
                  setAnimate({ opacity: 0, display: "flex", x: 1000 });
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                href="/"
                className="text-3xl"
              >
               خادمتنا {" "}
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Topnav;
