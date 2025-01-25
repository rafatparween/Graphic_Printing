import Image from "next/image";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Header from "./Components/Header";
import DataContent from "./Components/DataContent";
import Footer from "./Components/Footer";
import Support from "./Components/Support";

export default function Home() {
  return (
    <>
      <Slider/>
      {/* <Header/> */}
      <Support/>
      <DataContent/>
     
    </>
  );
}
