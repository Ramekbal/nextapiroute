import React from 'react'
import Footer from '../../components/Footer';
import Style from "./about.module.scss";
import Head from 'next/head';

export default function About() {
  return (
    <>
    <Head>
      <title>About </title>
      <meta name='description' content='About page seo'></meta>
    </Head>
      <h2 className={Style.h2Style}>This is a about page</h2>
    </>
  )
}

About.getLayout = function PageLayout (page){
  return (
    <>
    {page}
    <Footer></Footer>
    </>
  )
}
