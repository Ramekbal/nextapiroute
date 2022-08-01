import React from 'react'
import Footer from '../../components/Footer';
import Style from "./about.module.scss";

export default function About() {
  return (
    <div>
      <h2 className={Style.h2Style}>This is a about page</h2>
    </div>
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
