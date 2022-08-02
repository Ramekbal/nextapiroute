import 'styles/globals.css';
import "styles/layout.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {ThemeProvider} from "styled-components";
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import { Component, Fragment } from 'react';

//here is import the external css file.

const theme ={
  color:{
    primary:'#355c7d'
  }
}



function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout (<Component {...pageProps} />)
  }
  return(
    <Fragment>
    <Header/>
    <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
    <Footer/>
    </Fragment>
  )
  
}

export default MyApp
