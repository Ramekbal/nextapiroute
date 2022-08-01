import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/layout.css"
import {ThemeProvider} from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
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
