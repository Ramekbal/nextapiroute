import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {ThemeProvider} from "styled-components";

//here is import the external css file.

const theme ={
  color:{
    primary:'#355c7d'
  }
}

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
