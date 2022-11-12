import React from "react";
import Footer from "./Footer";
import Topnav from "./Topnav";
import Head from "next/head";

type Iprops = {
  children: JSX.Element;
};
const Layout = (props: Iprops) => {
  return (
    <div className="bg-background" dir="rtl" lang="ar">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/logo-blue.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="I-Human" />
        <title>Fast</title>
      </Head>
      <Topnav></Topnav>
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
