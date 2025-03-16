"use client";

import Avoid from "../Components/Avoid";
import FooterSection from "../Components/FooterSection";
import NextHeader from "../Components/NextHeader";
import NextNavbar from "../Components/NextNavbar";

import SupportPage from "../Components/SupportPage";
import Wrapper from "../Components/Wrapper";
import PrinterSetup from "./content/PrinterSetup";




function Home() {
  return (
    <>
      {/* <Navbar/>
      <Header/>
      <PrinterSetup/>
    
      <Digonode/>
      <SupportPage/>
     
      <Avoid/>
      <Wrapper/>
      <FooterSection/>
      <JivoChat/> */}
      <NextNavbar/>
      <NextHeader/>
      <PrinterSetup/>
      <SupportPage/>
      <Avoid/>
      
      <Wrapper/>
      {/* <FooterSection/> */}


    </>
  );
}

export default Home;